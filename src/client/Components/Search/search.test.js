import getWeather from './util/getWeather';
import moment from 'moment';
import { connect } from 'http2';

describe('Search component', () => {
  it('should successfully retrieve data from weatherapi', async (done) => {
    expect.assertions(2);
    const date = moment();

    const result = await getWeather({ date, location: 'Los Angeles, Ca'});

    expect(result.status).toBe(200);
    expect(result.data).toBeTruthy();
    done();
  });
});