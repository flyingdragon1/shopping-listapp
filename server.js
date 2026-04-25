const http = require('http');
const fs = require('fs');
const path = require('path');
const BASE = path.join(__dirname);

http.createServer((req, res) => {
  const name = req.url === '/' ? 'index.html' : req.url.replace(/^\//, '');
  fs.readFile(path.join(BASE, name), (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(8765, () => console.log('Server ready on 8765'));
