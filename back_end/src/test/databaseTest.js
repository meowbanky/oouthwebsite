const mysql = require('mysql2');
const { Client } = require('ssh2');
const sshClient = new Client();

const dbServer = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

const tunnelConfig = {
    host: process.env.DB_SSH_HOST,
    port: 22,
    username: process.env.DB_SSH_USER,
    password: process.env.DB_SSH_PASSWORD
};

const forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: 3306,
    dstHost: dbServer.host,
    dstPort: dbServer.port
};

const SSHConnection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
        sshClient.forwardOut(
            forwardConfig.srcHost,
            forwardConfig.srcPort,
            forwardConfig.dstHost,
            forwardConfig.dstPort,
            (err, stream) => {
                if (err) {
                    console.error('Error during SSH port forwarding:', err.message);
                    reject(err);
                }

                const updatedDbServer = {
                    ...dbServer,
                    stream
                };

                const connection = mysql.createConnection(updatedDbServer);
                connection.connect((error) => {
                    if (error) {
                        console.error('Error connecting to MySQL:', error.message);
                        reject(error);
                    }
                    resolve(connection);
                });
            }
        );
    }).connect(tunnelConfig);

    sshClient.on('error', (err) => {
        console.error('Error establishing SSH connection:', err.message);
        reject(err);
    });
});

// Usage example
SSHConnection.then((connection) => {
    console.log('Connected to the database!');

    // Run your queries here
    connection.query('SELECT * FROM table_name', (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return;
        }
        console.log(results);
        connection.end();
    });
}).catch((error) => {
    console.error('Database connection failed:', error);
});