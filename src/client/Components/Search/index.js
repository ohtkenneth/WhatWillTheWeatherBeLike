import React from 'react';
import DatePicker from "react-datepicker";
import moment from "moment";
import { getWeatherThunk } from './duck/actions';

import "react-datepicker/dist/react-datepicker.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleDateChange(date) {
    // TODO: only accept dates later than today within 1 year
    this.setState({
      date,
    });
  }
  handleSubmit() {
    // autocomplete input is on window object since defining callback there for after script has loaded
    // need to extract CITY, STATE, COUNTRY from location object because conflicting location formats 
    // TODO: Include country in location (e.g. Vernon, CA searches Vernon, Canada instead of USA)

    // check if valid location
    const location = window.autocomplete.getPlace();
    // if location is not google location, will return undefined
    if (!location) {
      // add validation styles
      document.querySelector('.search__input--validation').setAttribute('data-validation', 'Please select a valid location (City, State)');
      console.log('invalid!')
    } else {
      console.log(location);
      document.querySelector('.search__input--validation').setAttribute('data-validation', '');
      const startIndex = location.adr_address.indexOf('region') + 8;
      // add 1 day to get end date since weatherbit api needs 1 day range over two dates
      const city = location.vicinity.split(' ').join('+') + ', ' + location.adr_address.slice(startIndex, startIndex + 2);
  
      this.props.dispatch(getWeatherThunk({
        location: city,
        date: this.state.date,
      }));
    }
  }
  render() {
    return (
      <div className="search">
        <div className="search__input--validation" data-validation="">
          <input id="search" className="search__input" type="text" placeholder="Enter a location"/>
        </div>
        <DatePicker
          selected={ this.state.date }
          onChange={ this.handleDateChange } 
        />
        
        <a href="#" className="btn btn-submit" onClick={ this.handleSubmit }>Search</a>
      </div>
    );
  }
}