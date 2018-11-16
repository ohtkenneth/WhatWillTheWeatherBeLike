import getWeather from './util/getWeather';
import moment from 'moment';
import { connect } from 'http2';

describe('Search component', () => {
  it('should successfully retrieve data from weatherapi', async (done) => {
    expect.assertions(2);

    let date = moment();
    const results = await getWeather({date, location: 'los+angeles,ca' });

    // results should be greater than 1 since getting >= 2 years of data
    expect(results.length).toBeGreaterThan(1);
    expect(results.every(result => result.status === 200)).toBe(true);
    done();
  });
});