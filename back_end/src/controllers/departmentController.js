const { Department, Doctor, Service, Expertise, Facility, DepartmentContact, sequelize } = require('../models');
const { Op } = require('sequelize');

const getDepartments = async (req, res) => {
    try {
        const { dept } = req.query;
        console.log('Received dept query:', dept);

        let queryOptions = {
            include: [
                {
                    model: Doctor,
                    attributes: ['id', 'name', 'imageUrl', 'specialization', 'experience']
                },
                {
                    model: Service,
                    attributes: ['id', 'name', 'description', 'duration', 'price']
                },
                {
                    model: Expertise,
                    attributes: ['id', 'name']
                },
                {
                    model: Facility,
                    attributes: ['id', 'name']
                },
                {
                    model: DepartmentContact,
                    attributes: ['location', 'phone', 'email', 'hours']
                }
            ]
        };

        if (dept) {
            queryOptions.where = {
                name: {
                    [Op.like]: `%${dept}%`
                }
            };
        }

        console.log('Query options:', JSON.stringify(queryOptions, null, 2));

        const departments = await Department.findAll(queryOptions);

        console.log(`Found ${departments.length} departments`);
        console.log('Department names:', departments.map(d => d.name));

        res.json(departments);
    } catch (error) {
        console.error('Detailed error:', error);
        res.status(500).json({
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

const getDepartment = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id, {
            include: [
                {
                    model: Doctor,
                    attributes: ['id', 'name', 'imageUrl', 'specialization', 'experience']
                },
                {
                    model: Service,
                    attributes: ['id', 'name', 'description', 'duration', 'price']
                },
                {
                    model: Expertise,
                    attributes: ['id', 'name']
                },
                {
                    model: Facility,
                    attributes: ['id', 'name']
                },
                {
                    model: DepartmentContact,
                    attributes: ['location', 'phone', 'email', 'hours']
                }
            ]
        });

        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }

        res.json(department);
    } catch (error) {
        console.error('Error fetching department:', error);
        res.status(500).json({ error: error.message });
    }
};

const createDepartment = async (req, res) => {
    try {
        const {
            name,
            description,
            imageUrl,
            doctors,
            services,
            expertise,
            facilities,
            contact
        } = req.body;

        // Create department
        const department = await Department.create({
            name,
            description,
            imageUrl
        });

        // Create related data if provided
        if (expertise?.length) {
            await Promise.all(
                expertise.map(exp =>
                    Expertise.create({
                        name: exp,
                        departmentId: department.id
                    })
                )
            );
        }

        if (doctors?.length) {
            await Promise.all(
                doctors.map(doc =>
                    Doctor.create({
                        ...doc,
                        departmentId: department.id
                    })
                )
            );
        }

        if (services?.length) {
            await Promise.all(
                services.map(service =>
                    Service.create({
                        ...service,
                        departmentId: department.id
                    })
                )
            );
        }

        if (facilities?.length) {
            await Promise.all(
                facilities.map(facility =>
                    Facility.create({
                        name: facility,
                        departmentId: department.id
                    })
                )
            );
        }

        if (contact) {
            await DepartmentContact.create({
                ...contact,
                departmentId: department.id
            });
        }

        // Fetch the complete department data
        const createdDepartment = await Department.findByPk(department.id, {
            include: [Doctor, Service, Expertise, Facility, DepartmentContact]
        });

        res.status(201).json(createdDepartment);
    } catch (error) {
        console.error('Error creating department:', error);
        res.status(400).json({ error: error.message });
    }
};

const updateDepartment = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);

        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }

        const {
            name,
            description,
            imageUrl,
            doctors,
            services,
            expertise,
            facilities,
            contact
        } = req.body;

        // Update basic department info
        await department.update({
            name: name || department.name,
            description: description || department.description,
            imageUrl: imageUrl || department.imageUrl
        });

        // Update related data if provided
        if (expertise) {
            await Expertise.destroy({ where: { departmentId: department.id } });
            await Promise.all(
                expertise.map(exp =>
                    Expertise.create({
                        name: exp,
                        departmentId: department.id
                    })
                )
            );
        }

        if (doctors) {
            await Doctor.destroy({ where: { departmentId: department.id } });
            await Promise.all(
                doctors.map(doc =>
                    Doctor.create({
                        ...doc,
                        departmentId: department.id
                    })
                )
            );
        }

        if (services) {
            await Service.destroy({ where: { departmentId: department.id } });
            await Promise.all(
                services.map(service =>
                    Service.create({
                        ...service,
                        departmentId: department.id
                    })
                )
            );
        }

        if (facilities) {
            await Facility.destroy({ where: { departmentId: department.id } });
            await Promise.all(
                facilities.map(facility =>
                    Facility.create({
                        name: facility,
                        departmentId: department.id
                    })
                )
            );
        }

        if (contact) {
            await DepartmentContact.update(contact, {
                where: { departmentId: department.id }
            });
        }

        // Fetch updated department data
        const updatedDepartment = await Department.findByPk(department.id, {
            include: [Doctor, Service, Expertise, Facility, DepartmentContact]
        });

        res.json(updatedDepartment);
    } catch (error) {
        console.error('Error updating department:', error);
        res.status(400).json({ error: error.message });
    }
};

const deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);

        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }

        await department.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting department:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getDepartments,
    getDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment
};