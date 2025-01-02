// routes/upload.js
const express = require('express');
const router = express.Router();
const { upload, uploadDoctorImage } = require('../controllers/uploadController');

router.post('/doctor-image', upload.single('image'), uploadDoctorImage);

module.exports = router;