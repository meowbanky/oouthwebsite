require('dotenv').config();
const { Department, Doctor, Service, Expertise, Facility, DepartmentContact } = require('../models');

const verifySeeding = async () => {
    try {
        // Get all departments with related data
        const departments = await Department.findAll({
            include: [
                {
                    model: Doctor,
                    attributes: ['name', 'specialization', 'experience']
                },
                {
                    model: Service,
                    attributes: ['name', 'description', 'price']
                },
                {
                    model: Expertise,
                    attributes: ['name']
                },
                {
                    model: Facility,
                    attributes: ['name']
                },
                {
                    model: DepartmentContact,
                    attributes: ['location', 'phone', 'email', 'hours']
                }
            ]
        });

        console.log('\nVerification Results:');
        console.log('====================');

        departments.forEach(dept => {
            console.log(`\nDepartment: ${dept.name}`);
            console.log(`Doctors: ${dept.Doctors.length}`);
            console.log(`Services: ${dept.Services.length}`);
            console.log(`Expertise Areas: ${dept.Expertises.length}`);
            console.log(`Facilities: ${dept.Facilities.length}`);
            console.log('Contact Info:', dept.DepartmentContact ? 'Present' : 'Missing');
        });

        return departments;
    } catch (error) {
        console.error('Verification failed:', error);
        throw error;
    }
};

if (require.main === module) {
    verifySeeding()
        .then(() => {
            console.log('\nVerification completed');
            process.exit(0);
        })
        .catch(error => {
            console.error('\nVerification failed:', error);
            process.exit(1);
        });
}

module.exports = verifySeeding;