require('dotenv').config();

const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const xssFilters = require('xss-filters');
const { parse, stringify } = require('flatted/cjs');
const app = express();
const getWeather = require('./util/getWeather');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/api/weather', (req, res) => {
  const sanitized = {
    dateString: xssFilters.inHTMLData(req.query.dateString),
    location: xssFilters.inHTMLData(req.query.location),
  }
  getWeather(sanitized)
    .then(results => {
      console.log(JSON.stringify(results));
      res.send(JSON.stringify(results));
    })
    .catch(err => console.log(err, err.stack));
});

app.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = app;