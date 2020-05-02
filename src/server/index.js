import http2 from 'http2';
import config from 'config';

import winston from '../../log/config/index.js';
import app from './app.js';

try {
    const { port } = config.get('app');
    const options = {};
    const server = http2.createServer(options, app);
    server.on('sessionError', (error) => {
        if (error.name === 'ECONREFUSED') {
            winston.error('Impossible to connect, shutting down app');
            process.exit(1);
        } else if (error.name === 'EADDRRINUSE') {
            winston.error('Impossible to connect, port already used. Shutting down app');
            process.exit(2);
        } else {
            winston.error(`${error.message}\nStack: ${error.stack} `);
        }
    })
    server.listen(port, () => {
        console.info(`Listening to TBack App on port ${port}`);
    });
} catch (error) {
    console.error('Error during while launching app or accessing API', error);
}