const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('Hello World from node');
  console.log('Hello');
});
app.listen(port, () => console.log(`listen to the localhost ${port}`));

const http = require('http');
const { handleRequest } = require('./hello');
http.createServer(handleRequest).listen(port, '127.0.0.1', () =>
  console.log(`Start node http server at localhost:${port}`)
);
