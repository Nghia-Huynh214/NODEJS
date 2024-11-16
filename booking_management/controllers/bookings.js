const Booking = require('../models/booking');

// Thêm đặt chỗ mới
const addBooking = async (req, res) => {
    try {
        const { customerName, date, time } = req.body;

        // Kiểm tra trùng lịch
        const exists = await Booking.findOne({ date, time });
        if (exists) return res.status(400).send('Lịch đã tồn tại!');

        const booking = new Booking({ customerName, date, time });
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Lấy danh sách đặt chỗ
const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Sửa đặt chỗ
const updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const { customerName, date, time } = req.body;

        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            { customerName, date, time },
            { new: true }
        );
        res.json(updatedBooking);
    } catch (err) {res.status(500).send(err.message);
    }
};

// Hủy đặt chỗ
const cancelBooking = async (req, res) => {
    try {
        const { id } = req.params;

        const cancelledBooking = await Booking.findByIdAndUpdate(
            id,
            { status: 'Cancelled' },
            { new: true }
        );
        res.json(cancelledBooking);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { addBooking, getBookings, updateBooking, cancelBooking };