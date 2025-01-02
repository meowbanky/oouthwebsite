const { Doctor } = require('../../models');

const specializationMapping = {
    "Dentist": "Dental Care",
    "Orthodontist": "Dental Care",
    "Oral Surgeon": "Dental Care",
    "Periodontist": "Dental Care",
    "Dermatologist": "Dermatology",
    "Cosmetic Dermatologist": "Dermatology",
    "Surgical Dermatologist": "Dermatology",
    "Pediatric Dermatologist": "Dermatology",
    "Psychiatrist": "Psychiatry",
    "Clinical Psychologist": "Psychiatry",
    "Trauma Specialist": "Emergency Medicine",
    "Critical Care Specialist": "Emergency Medicine"
};

const findMatchingDepartment = (doctor, departmentIds) => {
    // Check direct specialization mapping
    for (const [spec, dept] of Object.entries(specializationMapping)) {
        if (doctor.specialization.includes(spec)) {
            return departmentIds[dept];
        }
    }

    // Check department names
    for (const [deptName, deptId] of Object.entries(departmentIds)) {
        if (
            doctor.specialization.toLowerCase().includes(deptName.toLowerCase()) ||
            deptName.toLowerCase().includes(doctor.specialization.split(' ')[0].toLowerCase())
        ) {
            return deptId;
        }
    }

    return null;
};

const seedDoctors = async (doctors, departmentIds) => {
    console.log('\nSeeding Doctors...');

    for (const doctor of doctors) {
        try {
            const departmentId = findMatchingDepartment(doctor, departmentIds);

            if (departmentId) {
                await Doctor.create({
                    ...doctor,
                    departmentId
                });
                console.log(`✓ Added ${doctor.name} (${doctor.specialization})`);
            } else {
                console.log(`⚠ Could not assign department for ${doctor.name} (${doctor.specialization})`);
            }
        } catch (error) {
            console.error(`Error creating doctor ${doctor.name}:`, error);
        }
    }
};

module.exports = { seedDoctors };