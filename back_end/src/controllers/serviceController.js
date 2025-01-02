const { Service, Department } = require('../models');
const { Op } = require('sequelize');

const getServices = async (req, res) => {
    try {
        const { dept } = req.query;

        let queryOptions = {
            include: [
                {
                    model: Department,
                    as: 'Department',
                    attributes: ['id', 'name']
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

        const services = await Service.findAll(queryOptions);
        res.json(services);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ error: error.message });
    }
};

const getService = async (req, res) => {
    try {
        const service = await Service.findByPk(req.params.id, {
            include: [
                {
                    model: Department,
                    as: 'Department',
                    attributes: ['id', 'name']
                }
            ]
        });

        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }

        res.json(service);
    } catch (error) {
        console.error('Error fetching service:', error);
        res.status(500).json({ error: error.message });
    }
};

const createService = async (req, res) => {
    try {
        const { name, description, duration, price, departmentId } = req.body;
        const service = await Service.create({
            name,
            description,
            duration,
            price,
            departmentId
        });

        const createdService = await Service.findByPk(service.id, {
            include: [{ model: Department, as: 'Department' }]
        });

        res.status(201).json(createdService);
    } catch (error) {
        console.error('Error creating service:', error);
        res.status(400).json({ error: error.message });
    }
};

const updateService = async (req, res) => {
    try {
        const service = await Service.findByPk(req.params.id);

        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }

        const { name, description, duration, price, departmentId } = req.body;

        await service.update({
            name: name || service.name,
            description: description || service.description,
            duration: duration || service.duration,
            price: price || service.price,
            departmentId: departmentId || service.departmentId
        });

        const updatedService = await Service.findByPk(service.id, {
            include: [{ model: Department, as: 'Department' }]
        });

        res.json(updatedService);
    } catch (error) {
        console.error('Error updating service:', error);
        res.status(400).json({ error: error.message });
    }
};

const deleteService = async (req, res) => {
    try {
        const service = await Service.findByPk(req.params.id);

        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }

        await service.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getServices,
    getService,
    createService,
    updateService,
    deleteService
};