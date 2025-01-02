const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Expertise = sequelize.define('Expertise', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Expertise.associate = (models) => {
        Expertise.belongsTo(models.Department, {
            foreignKey: {
                name: 'departmentId',
                allowNull: false
            }
        });
    };

    return Expertise;
};