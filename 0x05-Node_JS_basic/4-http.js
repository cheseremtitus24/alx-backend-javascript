const http = require('http');
const app_port = 1245;

// Create a local app to receive data from
const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello Holberton School!");
});

console.log(`app listening on localhost:${app_port}`)
app.listen(app_port);
module.exports = app;
