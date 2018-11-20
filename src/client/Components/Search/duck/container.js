import { connect } from 'react-redux';
import Search from '../index';
import { getWeatherThunk } from './actions';

const mapStateToProps = (state) => {
  return {
    isGetting: state.searchReducer.isGetting,
   //  data: tempdata
  };
};
export default connect(mapStateToProps, null)(Search);