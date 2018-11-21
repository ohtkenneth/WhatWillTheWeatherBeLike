import React from 'react';
import { connect } from 'react-redux';
import Script from 'react-load-script';
import ErrorBoundry from './ErrorBoundry/index';
import VisibleSearch from './Search/duck/container';
import Visualization from './Visualization/index';
import './weather-icons/css/weather-icons.css';
import './sass/main.scss';

const mapStateToProps = (state) => {
  return {
    date: state.searchReducer.payload.date,
    data: state.searchReducer.data,
    location: state.searchReducer.payload.location,
    isGetting: state.searchReducer.isGetting,
  };
};

const App = ({ date, data, location, isGetting }) => {
  function handleGoogleScriptLoad() {
    const options = {
      types: ['(cities)'],
      componentRestrictions: { country: 'us' },
    };
    window.autocomplete = new google.maps.places.Autocomplete(document.getElementById('search'), options);
  }
  return (
    <div className="app">
      <ErrorBoundry>
        <VisibleSearch />
        {
          data.length > 0 
          ? <Visualization data={ data } location={ location } date={ date }/> 
          : void 0
        }
        <Script 
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_ODz_Za267SsVL-psqPfFkG-JSejtJrs&libraries=places"
          onLoad={ handleGoogleScriptLoad }
        />
      </ErrorBoundry>
    </div>
  );
};

// export default App;
export default connect(mapStateToProps, null)(App);
