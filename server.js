// Simple dev server untuk testing api/index.js
const http = require('http');
const handler = require('./api/index.js');

const server = http.createServer((req, res) => {
  // Serve static files
  if (req.url.startsWith('/static/') || req.url === '/profile.png') {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, req.url);
    
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found');
        return;
      }
      res.statusCode = 200;
      res.end(data);
    });
    return;
  }
  
  // Route ke api/index.js
  handler(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}\n`);
});
