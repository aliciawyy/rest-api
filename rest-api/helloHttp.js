const http = require('http');
const { handleRequest } = require('./hello');

http.createServer(handleRequest).listen(3000);

console.log('Server connected to localhost:3000...');
