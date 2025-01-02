const createConnection = require('./test/databaseTest');

const testConnection = async () => {
    try {
        console.log('Attempting to connect to database...');
        const connection = await createConnection();

        console.log('Connection established, testing query...');
        const [tables] = await connection.query('SHOW TABLES');
        console.log('Available tables:', tables);

        await connection.end();
        console.log('Connection test completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Connection test failed:', error);
        process.exit(1);
    }
};

console.log('Starting connection test...');
testConnection();