const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');


router.post('/add', async (req, res) => {
    try {
        const { customerName, date, time } = req.body;

        
        const exists = await Booking.findOne({ date, time });
        if (exists) return res.status(400).json({ message: 'Lịch đã tồn tại!' });

        const booking = new Booking({ customerName, date, time });
        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { customerName, date, time } = req.body;

        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            { customerName, date, time },
            { new: true }
        );

        res.json(updatedBooking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const cancelledBooking = await Booking.findByIdAndUpdate(
            id,
            { status: 'Cancelled' },
            { new: true }
        );

        res.json(cancelledBooking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;