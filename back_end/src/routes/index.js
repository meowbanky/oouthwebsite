const express = require('express');
const router = express.Router();

// Import routes
const authRoutes = require('./auth');
const departmentRoutes = require('./departments');
const doctorRoutes = require('./doctors');
const appointmentRoutes = require('./appointments');
const serviceRoutes = require('./services');
const blogRoutes = require('./blogs');
const uploadRoutes = require('./upload');


// Use routes
router.use('/auth', authRoutes);
router.use('/departments', departmentRoutes);
router.use('/doctors', doctorRoutes);
router.use('/appointments', appointmentRoutes);

router.use('/services', serviceRoutes);
router.use('/blogs', blogRoutes);
router.use('/auth', authRoutes);
router.use('/upload', uploadRoutes);


// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'API is working' });
});

module.exports = router;