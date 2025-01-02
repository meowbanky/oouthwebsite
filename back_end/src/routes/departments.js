const express = require('express');
const router = express.Router();
const {
    getDepartments,
    getDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment
} = require('../controllers/departmentController');

// Public routes
router.get('/', getDepartments);
router.get('/:id', getDepartment);

// Protected routes (you can add auth middleware later)
router.post('/', createDepartment);
router.put('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);

module.exports = router;