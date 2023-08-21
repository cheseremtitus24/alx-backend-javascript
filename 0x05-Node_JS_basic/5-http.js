const http = require('http');
const students = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let out = 'This is the list of our students\n';
    await students(process.argv[2]).then((message) => {
      out += message;
      res.end(Buffer.from(out));
    }).catch((err) => {
      out += err.message;
      res.end(out);
    });
  }
});
const port = 1245;

app.listen(port);

module.exports = app;
