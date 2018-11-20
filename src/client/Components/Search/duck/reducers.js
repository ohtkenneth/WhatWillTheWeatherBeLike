import {
  REQUEST_WEATHER,
  SEARCH_WEATHER,
  RECEIVE_WEATHER,
} from './actions';

const initialState = {
  data: [],
  payload: {},
  isGetting: false,
};

function weather(
  state = initialState,
  action
) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isGetting: true,
        data: [],
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
        payload: action.payload
      });
    default:
      return state;
  }
}

export default weather;