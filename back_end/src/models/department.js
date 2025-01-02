const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Department = sequelize.define('Department', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING
        }
    });

    Department.associate = (models) => {
        Department.hasMany(models.Doctor, {
            foreignKey: 'departmentId',
            onDelete: 'CASCADE'
        });
        Department.hasMany(models.Service, {
            foreignKey: 'departmentId',
            onDelete: 'CASCADE'
        });
        Department.hasMany(models.Facility, {
            foreignKey: 'departmentId',
            onDelete: 'CASCADE'
        });
        Department.hasMany(models.Expertise, {
            foreignKey: 'departmentId',
            onDelete: 'CASCADE'
        });
        Department.hasOne(models.DepartmentContact, {
            foreignKey: 'departmentId',
            onDelete: 'CASCADE'
        });
    };

    return Department;
};