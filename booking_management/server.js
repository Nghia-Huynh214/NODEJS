const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookingRoutes = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/booking_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Kết nối MongoDB thành công!");
}).catch(err => console.error("Lỗi kết nối MongoDB:", err.message));

// Routes
app.use('/api/bookings', bookingRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});