const { Sequelize } = require('sequelize');
const path = require('path');

// Initialize Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
);

// Initialize models
const Department = require('./department')(sequelize);
const Doctor = require('./doctor')(sequelize);
const Service = require('./service')(sequelize);
const Facility = require('./facility')(sequelize);
const DepartmentContact = require('./departmentContact')(sequelize);
const Expertise = require('./expertise')(sequelize);

// Set up associations
Department.hasMany(Doctor);
Doctor.belongsTo(Department);

Department.hasMany(Service);
Service.belongsTo(Department);

Department.hasMany(Facility);
Facility.belongsTo(Department);

Department.hasOne(DepartmentContact);
DepartmentContact.belongsTo(Department);

Department.hasMany(Expertise);
Expertise.belongsTo(Department);

const models = {
    Department,
    Doctor,
    Service,
    Facility,
    DepartmentContact,
    Expertise
};

module.exports = { sequelize, ...models };