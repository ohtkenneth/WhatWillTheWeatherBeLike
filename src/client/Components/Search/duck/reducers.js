import { combineReducers } from 'redux';
import {
  REQUEST_WEATHER,
  SEARCH_WEATHER,
  RECEIVE_WEATHER,
} from './actions';

const initialState = {
  weather: null,
};

function search(state = initialState, action) {
  if (!state) {
    return initialState;
  }
}

function weather(
  state = {
    isGetting: false,
    data: [],
  },
  action
) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isGetting: true,
        payload: action.payload,
      });
    case SEARCH_WEATHER:
      return Object.assign({}, state, {
        isGetting: true,
      });
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        isGetting: false,
        data: action.data,
      });
    default:
      return state;
  }
}

export default weather;