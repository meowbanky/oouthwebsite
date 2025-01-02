const { Doctor, Department, Sequelize } = require('../models');
const { Op } = require('sequelize');

const getDoctors = async (req, res) => {
    try {
        const { dept } = req.query;

        const queryOptions = {
            include: [
                {
                    model: Department,
                    as: 'Department',
                    attributes: ['id', 'name', 'description', 'imageUrl']
                }
            ]
        };

        if (dept) {
            queryOptions.include[0].where = {
                name: {
                    [Op.like]: `%${dept}%`
                }
            };
        }

        const doctors = await Doctor.findAll(queryOptions);
        res.json(doctors);
    } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).json({ error: error.message });
    }
};
const getDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id, {
            include: [
                {
                    model: Department,
                    as: 'Department',
                    attributes: ['id', 'name', 'description', 'imageUrl']
                }
            ]
        });

        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        res.json(doctor);
    } catch (error) {
        console.error('Error fetching doctor:', error);
        res.status(500).json({ error: error.message });
    }
};

const createDoctor = async (req, res) => {
    try {
        const {
            name,
            specialization,
            experience,
            imageUrl,
            departmentId
        } = req.body;

        // Create doctor
        const doctor = await Doctor.create({
            name,
            specialization,
            experience,
            imageUrl,
            departmentId
        });

        // Fetch the complete doctor data with department
        const createdDoctor = await Doctor.findByPk(doctor.id, {
            include: [{
                model: Department,
                as: 'Department'  // Add this alias
            }]
        });

        res.status(201).json(createdDoctor);
    } catch (error) {
        console.error('Error creating doctor:', error);
        res.status(400).json({ error: error.message });
    }
};

const updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id);

        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const {
            name,
            specialization,
            experience,
            imageUrl,
            departmentId
        } = req.body;

        // Update doctor info
        await doctor.update({
            name: name || doctor.name,
            specialization: specialization || doctor.specialization,
            experience: experience || doctor.experience,
            imageUrl: imageUrl || doctor.imageUrl,
            departmentId: departmentId || doctor.departmentId
        });

        // Fetch updated doctor data
        const updatedDoctor = await Doctor.findByPk(doctor.id, {
            include: [Department]
        });

        res.json(updatedDoctor);
    } catch (error) {
        console.error('Error updating doctor:', error);
        res.status(400).json({ error: error.message });
    }
};

const deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id);

        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        await doctor.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting doctor:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getDoctors,
    getDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor
};