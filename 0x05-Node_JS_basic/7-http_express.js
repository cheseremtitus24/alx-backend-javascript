const express = require('express');
const students = require('./3-read_file_async');

const port = 1245;
const app = express();

app.get('/', async (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let out = 'This is the list of our students\n';
  await students(process.argv[2]).then((message) => {
    out += message;
    res.end(Buffer.from(out));
  }).catch((err) => {
    out += err.message;
    res.end(out);
  });
});

app.listen(port);
module.exports = app;

