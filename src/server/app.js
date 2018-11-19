require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
const getWeather = require('./util/getWeather');

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/api/weather', (req, res) => {
  getWeather(req.query)
    .then(results => {
      res.send(results)
    })
    .catch(err => console.log(err, err.stack));
});

module.exports = app;