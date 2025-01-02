const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const DepartmentContact = sequelize.define('DepartmentContact', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        location: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        hours: {
            type: DataTypes.STRING
        }
    });

    return DepartmentContact;
};