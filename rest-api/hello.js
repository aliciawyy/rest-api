function handleRequest (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`${req.method} is called.`);
}

module.exports = { handleRequest };
