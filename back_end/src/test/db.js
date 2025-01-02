const mysql = require('mysql2');
const Client = require('ssh2').Client;

const db = new Promise((resolve, reject) => {
    const ssh = new Client();

    // Debug log to indicate when SSH is trying to connect
    console.log('Attempting to establish SSH connection...');

    ssh.on('ready', () => {
        console.log('SSH connection established.');

        ssh.forwardOut(
            // Source address
            '127.0.0.1',
            // Source port
            12345,
            // Destination address (localhost here refers to the SSH server)
            '151.236.34.117',
            // Destination port
            3306,
            (err, stream) => {
                if (err) {
                    console.error('Error during SSH port forwarding:', err.message);
                    ssh.end(); // Ensure the SSH connection is closed
                    return reject(err); // Reject the promise with the error
                }

                console.log('SSH port forwarding successful. Attempting database connection...');
                const connection = mysql.createConnection({
                    host: '151.236.34.117', // Host for the forwarded connection
                    user: 'oouthco_bid', // Database user
                    password: 'Oluwaseyi@7980', // Database password
                    database: 'oouthco_bid', // Database name
                    stream: stream, // Use the forwarded stream
                });

                connection.connect((err) => {
                    if (err) {
                        console.error('Error connecting to MySQL:', err.message);
                        ssh.end(); // Clean up the SSH connection on failure
                        return reject(err); // Reject with the error
                    }
                    console.log('Database connection established.');
                    resolve(connection); // Resolve with the successful connection
                });
            }
        );
    }).connect({
        host: '151.236.34.117', // SSH server host
        port: 6181, // SSH server port
        username: 'oouthco', // SSH username
        password: 'Banky@123', // SSH password
    });

    // Handle SSH connection errors
    ssh.on('error', (err) => {
        console.error('Error establishing SSH connection:', err.message);
        reject(err);
    });

    ssh.on('close', () => {
        console.log('SSH connection closed.');
    });
});

// Export the promise for use in other parts of the application
module.exports = db;
