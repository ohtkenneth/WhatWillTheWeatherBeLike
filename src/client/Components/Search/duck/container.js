import { connect } from 'react-redux';
import Search from '../index';

const mapStateToProps = (state) => {
  return {
    isGetting: state.searchReducer.isGetting,
  };
};
export default connect(mapStateToProps, null)(Search);