const {
    departments,
    doctors,
    expertise,
    facilities,
    services,
    departmentContacts
} = require('./baseData');

const {
    additionalDepartments,
    additionalDoctors,
    additionalExpertise,
    additionalFacilities,
    additionalServices,
    additionalContacts
} = require('./additionalData');

const seedData = {
    departments: [...departments, ...additionalDepartments],
    doctors: [...doctors, ...additionalDoctors],
    expertise: { ...expertise, ...additionalExpertise },
    facilities: { ...facilities, ...additionalFacilities },
    services: { ...services, ...additionalServices },
    departmentContacts: { ...departmentContacts, ...additionalContacts }
};

module.exports = { seedData };