const express = require('express');
const Service = require('../models/service');

const router = express.Router();

// Lấy danh sách dịch vụ
router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

module.exports = router;
