export const SEARCH_WEATHER = 'SEARCH_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';

import getWeather from '../util/getWeather';
// payload has properties city, year
export function requestWeather(payload) {
  return {
    type: REQUEST_WEATHER,
    payload,
  };
}

export function receiveWeather(data) {
  return {
    type: RECEIVE_WEATHER,
    data,
  };
}

export function getWeatherThunk(payload) {
  return function(dispatch) {
    // tell store were getting weather
    dispatch(requestWeather(payload));
    // get last 2 years
    
    return getWeather(payload)
      .then(
        results => results.map(result => result.data.data),
        err => console.log(err, err.stack)
      )
      .then(data => {
        // tell store we've got the data
        dispatch(receiveWeather(data));
      });
  }
}