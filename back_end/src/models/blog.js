const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Blog = sequelize.define('Blog', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        excerpt: {
            type: DataTypes.TEXT
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        },
        tags: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    return Blog;
};