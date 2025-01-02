const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Appointment = sequelize.define('Appointment', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        dateTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('scheduled', 'completed', 'cancelled'),
            defaultValue: 'scheduled'
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    Appointment.associate = (models) => {
        Appointment.belongsTo(models.User, { as: 'patient' });
        Appointment.belongsTo(models.Doctor);
    };

    return Appointment;
};