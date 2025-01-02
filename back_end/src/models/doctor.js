const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Doctor = sequelize.define('Doctor', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING
        },
        specialization: {
            type: DataTypes.STRING,
            allowNull: false
        },
        experience: {
            type: DataTypes.STRING
        },
        userId: {  // Add this field
            type: DataTypes.UUID,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        departmentId: {  // Added this field
            type: DataTypes.UUID,
            references: {
                model: 'Departments',
                key: 'id'
            }
        }
    });

    Doctor.associate = (models) => {
        Doctor.belongsTo(models.Department, {
            foreignKey: 'departmentId',
            as: 'Department'
        });
        Doctor.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return Doctor;
};