const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = 9999;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

let data = {
  counter: 0,
};

app.get('/get', (request, response) => {
  response.json(data);
});

app.post('/add', (req, res) => {
  data.counter++;
  res.end();
});

app.post('/subtract', (req, res) => {
  data.counter--;
  res.end();
});

app.post('/reset', (req, res) => {
  data.counter = 0;
  res.end();
});

app.listen(process.env.PORT || PORT, () => {});
