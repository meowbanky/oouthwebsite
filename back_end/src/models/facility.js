const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Facility = sequelize.define('Facility', {
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

    return Facility;
};