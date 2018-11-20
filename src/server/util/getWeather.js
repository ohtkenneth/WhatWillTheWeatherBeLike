require('dotenv').config();
const axios = require('axios');
const moment = require('moment');
const { parse, stringify } = require('flatted/cjs');

const weatherApiKey = process.env.WEATHER_API_KEY;

async function getWeather({ dateString, location }) {
  // .format('YYYY-MM-DD')
  // base options to use to get
  let promisesToGet = [];
  // since moment date gets mutated, store first
  // const options1EndDate = date.clone().subtract(1, 'years').add(7, 'days');
  const date = moment(dateString).add(1, 'days');

  const options1 = {
    url: 'https://api.worldweatheronline.com/premium/v1/past-weather.ashx',
    method: 'get',
    params: {
      q: location,
      format: 'json',
      date: date.clone().subtract(1, 'years').subtract(3, 'days').format('YYYY-MM-DD'),
      enddate: date.clone().subtract(1, 'years').add(3, 'days').format('YYYY-MM-DD'),
      key: weatherApiKey,
      tp: 24,
    }
  }

  const options2 = JSON.parse(JSON.stringify(options1));
  // tp = 1 for 24 hour data
  options2.params.tp = 1;
  options2.params.date = date.clone().subtract(1, 'years').format('YYYY-MM-DD');
  delete options2.params.enddate;
  // deep clone options1
  const options3 = JSON.parse(JSON.stringify(options2));
  options2.params.date = date.clone().subtract(2, 'years').format('YYYY-MM-DD');
  
  promisesToGet.push(
    axios(options1),
    axios(options2),
    axios(options3),
  );

  try {
    let results = await Promise.all(promisesToGet);

    results = results.map(result => {
      return result.data.data;
    });

    return results;
  } catch(err) {
    return err;
  } 
}

module.exports = getWeather;