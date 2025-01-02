const { Sequelize } = require('sequelize');

// First initialize Sequelize
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
const models = {
    User: require('./user')(sequelize),
    Department: require('./department')(sequelize),
    Doctor: require('./doctor')(sequelize),
    Service: require('./service')(sequelize),
    Facility: require('./facility')(sequelize),
    DepartmentContact: require('./departmentContact')(sequelize),
    Expertise: require('./expertise')(sequelize),
    Blog: require('./blog')(sequelize)
};

// Set up associations
Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = { sequelize, ...models };