const express = require('express');
const Reservation = require('../models/reservation');
const auth = require('../middleware/auth');

const router = express.Router();

// Tạo đặt chỗ
router.post('/', auth, async (req, res) => {
  try {
    const { service, date, time, people } = req.body;
    const reservation = new Reservation({
      user: req.user.id,
      service,
      date,
      time,
      people,
    });
    await reservation.save();
    res.status(201).send('Reservation created');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Lấy danh sách đặt chỗ của người dùng
router.get('/', auth, async (req, res) => {
  const reservations = await Reservation.find({ user: req.user.id }).populate('service');
  res.json(reservations);
});

// Xóa đặt chỗ
router.delete('/:id', auth, async (req, res) => {
  try {
    await Reservation.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.send('Reservation deleted');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
