import React from 'react';
import { connect } from 'react-redux';
import ErrorBoundry from './ErrorBoundry/index';
import VisibleSearch from './Search/duck/container';
// import VisibleVisualization from './Visualization/duck/container';
import Visualization from './Visualization/index';
import './weather-icons/css/weather-icons.css';
import './sass/main.scss';

const mapStateToProps = (state) => {
  return {
    data: state.searchReducer.data,
  };
};

const App = ({ data }) => {
  console.log(data);
  return (
    <div className="app">
      <ErrorBoundry>
        <VisibleSearch />
        {
          data.length > 0 ? <Visualization data={ data } /> : void 0
        }

      </ErrorBoundry>
    </div>
  );
};

// export default App;
export default connect(mapStateToProps, null)(App);