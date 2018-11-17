import axios from 'axios';
import config from '../../../../config';

export default async function getWeather({ date, location }) {
  // .format('YYYY-MM-DD')
  // base options to use to get
  // TODO: DRY up this code
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
    const result = await Promise.all(promisesToGet);
    return result;
  } catch(err) {
    return err;
  } 
}