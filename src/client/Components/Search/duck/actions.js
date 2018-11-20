import axios from 'axios';
export const SEARCH_WEATHER = 'SEARCH_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';

// payload has properties location, year
export function requestWeather(payload) {
  return {
    type: REQUEST_WEATHER,
    payload,
  };
}

export function receiveWeather(data, payload) {
  return {
    type: RECEIVE_WEATHER,
    data,
    payload,
  };
}

export function getWeatherThunk(payload) {
  return function(dispatch) {
    // tell store were getting weather
    dispatch(requestWeather(payload));
    // get last 2 years
    const options = {
      url: '/api/weather',
      method: 'get',
      params: {
        dateString: payload.date,
        location: payload.location,
      },
    };

    return axios(options)
      .then(
        results => results.data,
        err => console.log(err, err.stack)
      )
      .then(data => {
        dispatch(receiveWeather(data, payload));
      });
  }
}