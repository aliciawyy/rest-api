/**
 Routing refers to the mecanism for serving the client the content it has
 asked for.
 */
const http = require('http');

http.createServer((req, res) => {
  let path = req.url.replace(/\/?(?:\?)?$/, '').toLowerCase();
  switch (path) {
    case '':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Homepage');
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      break;
  }

}).listen(3000);

console.log('Server connected to localhost:3000...');
