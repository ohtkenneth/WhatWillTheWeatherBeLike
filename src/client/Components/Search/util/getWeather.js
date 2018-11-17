import axios from 'axios';
import config from '../../../../config';

export default async function getWeather({ date, location }) {
  // .format('YYYY-MM-DD')
  // base options to use to get
  let promisesToGet = [];

  const options1 = {
    url: 'https://api.worldweatheronline.com/premium/v1/past-weather.ashx',
    method: 'get',
    params: {
      q: location,
      format: 'json',
      date: date.subtract(1, 'years').format('YYYY-MM-DD'),
      key: config.weather,
      tp: 1,
    }
  };

  // deep clone options1
  const options2 = JSON.parse(JSON.stringify(options1));
  options2.params.date = date.subtract(1, 'years').format('YYYY-MM-DD');

  promisesToGet.push(
    axios(options1),
    axios(options2),
  );

  try {
    let results = await Promise.all(promisesToGet);
    // map results with inputted location since not returned from api
    results = results.map(result => {
      result.data.data.request[0].location = location;
      return result;
    });
    return results;
  } catch(err) {
    return err;
  } 
}