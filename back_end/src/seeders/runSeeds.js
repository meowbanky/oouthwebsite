require('dotenv').config();
const { sequelize, Department, Doctor, Service, Expertise, Facility, DepartmentContact, Blog } = require('../models');
const {
    departments,
    doctors,
    expertise,
    facilities,
    services,
    departmentContacts
} = require('./sampleData');

const {
    additionalDepartments,
    additionalDoctors,
    additionalExpertise,
    additionalFacilities,
    additionalServices,
    additionalContacts,
    additionalBlogs
} = require('./expandedData');


const combinedData = {
    departments: [...departments, ...additionalDepartments],
    doctors: [...doctors, ...additionalDoctors],
    expertise: { ...expertise, ...additionalExpertise },
    facilities: { ...facilities, ...additionalFacilities },
    services: { ...services, ...additionalServices },
    contacts: { ...departmentContacts, ...additionalContacts },
    blogs: [...additionalBlogs]
};

const seedDatabase = async () => {
    try {
        console.log('Starting database seeding process...');

        // Drop and recreate all tables
        await sequelize.sync({ force: true });
        console.log('Database synced - all tables recreated');

        const departmentIds = {};

        // Create departments
        for (const dept of combinedData.departments) {
            try {
                const createdDept = await Department.create(dept);
                departmentIds[createdDept.name] = createdDept.id;
                console.log(`✓ Created department: ${createdDept.name}`);
            } catch (error) {
                console.error(`Error creating department ${dept.name}:`, error);
            }
        }

        // Create related data for each department
        for (const deptName of Object.keys(departmentIds)) {
            const departmentId = departmentIds[deptName];

            try {
                // Create expertise
                if (combinedData.expertise[deptName]) {
                    await Promise.all(
                        combinedData.expertise[deptName].map(exp =>
                            Expertise.create({ name: exp, departmentId })
                        )
                    );
                    console.log(`✓ Added expertise for: ${deptName}`);
                }

                // Create facilities
                if (combinedData.facilities[deptName]) {
                    await Promise.all(
                        combinedData.facilities[deptName].map(facility =>
                            Facility.create({ name: facility, departmentId })
                        )
                    );
                    console.log(`✓ Added facilities for: ${deptName}`);
                }

                // Create services
                if (combinedData.services[deptName]) {
                    await Promise.all(
                        combinedData.services[deptName].map(service =>
                            Service.create({ ...service, departmentId })
                        )
                    );
                    console.log(`✓ Added services for: ${deptName}`);
                }

                // Create contact
                if (combinedData.contacts[deptName]) {
                    await DepartmentContact.create({
                        ...combinedData.contacts[deptName],
                        departmentId
                    });
                    console.log(`✓ Added contact for: ${deptName}`);
                }
            } catch (error) {
                console.error(`Error adding related data for ${deptName}:`, error);
            }
        }

        // Create doctors
        for (const doctor of combinedData.doctors) {
            try {
                const departmentMatch = combinedData.departments.find(dept =>
                    doctor.specialization.toLowerCase().includes(dept.name.toLowerCase()) ||
                    dept.name.toLowerCase().includes(doctor.specialization.toLowerCase())
                );

                if (departmentMatch) {
                    await Doctor.create({
                        ...doctor,
                        departmentId: departmentIds[departmentMatch.name]
                    });
                    console.log(`✓ Added Dr. ${doctor.name} to ${departmentMatch.name}`);
                }
            } catch (error) {
                console.error(`Error creating doctor ${doctor.name}:`, error);
            }
        }

        console.log('Seeding blogs...');
        await Promise.all(
            Object.values(combinedData.blogs).map(blog => Blog.create(blog))
        );
        console.log('Successfully seeded blogs');

        console.log('\nDatabase seeding completed successfully!');
        return true;
    } catch (error) {
        console.error('Fatal error during seeding:', error);
        throw error;
    }
};

if (require.main === module) {
    seedDatabase()
        .then(() => {
            console.log('Seeding completed successfully');
            process.exit(0);
        })
        .catch(error => {
            console.error('Seeding failed:', error);
            process.exit(1);
        });
}

module.exports = seedDatabase;