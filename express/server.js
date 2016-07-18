const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/greet/:name', (req, res) => {
  var name = req.param('name');
  res.send(`Hello ${name}!`);
});

app.listen(3000, () => console.log('Listening on 3000!'));
