const { Department, Doctor, Service, Expertise, Facility, DepartmentContact } = require('../../models');

const verifySeeding = async () => {
    try {
        const stats = {
            departments: await Department.count(),
            doctors: await Doctor.count(),
            expertise: await Expertise.count(),
            facilities: await Facility.count(),
            services: await Service.count(),
            contacts: await DepartmentContact.count()
        };

        console.log('\nVerification Results:');
        console.log('====================');
        Object.entries(stats).forEach(([key, value]) => {
            console.log(`${key}: ${value} records`);
        });

        // Verify department relationships
        const departments = await Department.findAll({
            include: [Doctor, Service, Expertise, Facility, DepartmentContact]
        });

        console.log('\nDepartment Details:');
        console.log('==================');
        departments.forEach(dept => {
            console.log(`\n${dept.name}:`);
            console.log(`- Doctors: ${dept.Doctors?.length || 0}`);
            console.log(`- Services: ${dept.Services?.length || 0}`);
            console.log(`- Expertise Areas: ${dept.Expertises?.length || 0}`);
            console.log(`- Facilities: ${dept.Facilities?.length || 0}`);
            console.log(`- Contact Info: ${dept.DepartmentContact ? 'Yes' : 'No'}`);
        });

        return stats;
    } catch (error) {
        console.error('Error during verification:', error);
        throw error;
    }
};

module.exports = { verifySeeding };