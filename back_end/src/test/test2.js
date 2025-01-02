const db = require('./db');

(async () => {
    try {
        const connection = await db;
        console.log('Connected to the database!');

        // Run your queries here
        // connection.query('SELECT * FROM table_name', (err, results) => {
        //     if (err) throw err;
        //     console.log(results);
        // });

        connection.end(); // Properly close the MySQL connection
    } catch (error) {
        console.error('Database connection failed:', error);
    }
})();
