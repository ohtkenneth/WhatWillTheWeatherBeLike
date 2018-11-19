import getWeather from './getWeather';
import moment from 'moment';

describe('getWeather utility function', () => {
  it('should successfully retrieve data from weatherapi', async (done) => {

    let dateString = moment().format('YYYY-MM-DD');
    const results = await getWeather({dateString, location: 'los+angeles,ca' });
    // results should be greater than 1 since getting >= 2 years of data
    expect(results.length).toBeGreaterThan(1);
    done();
  });
});