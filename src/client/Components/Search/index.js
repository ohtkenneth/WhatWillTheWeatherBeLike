import React from 'react';
import DatePicker from "react-datepicker";
import moment from "moment";
import { getWeatherThunk } from './duck/actions';

import "react-datepicker/dist/react-datepicker.css";
const preloading = require('../../../public/loading.gif');

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    const currMoment = moment();
    this.state = {
      date: currMoment,
      dateString: currMoment.format('YYYY-MM-DD'),
      location: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleDateChange(date) {
    // if the selected date is more than a year from today, then invalid
    let dataValidation = document.querySelector('.search__date--validation');
    
    if (Math.abs(date.diff(moment(), 'years', true)) > 1) {
      dataValidation.setAttribute('data-validation', 'Please select a date within 1 year from today');
    } else {
      document.querySelector('.search__date--validation').setAttribute('data-validation', '');
      this.setState({
        date,
        dateString: date.format('YYYY-MM-DD'),
      });
    }
  }
  handleSubmit() {
    // autocomplete input is on window object since defining callback there for after script has loaded
    // need to extract CITY, STATE, COUNTRY from location object because conflicting location formats 
    // check if valid location
    const location = window.autocomplete.getPlace();
    // if location is not google location, will return undefined
    if (!location) {
      // add validation styles
      document.querySelector('.search__input--validation').setAttribute('data-validation', 'Please select a valid location (City, State)');
    } else {
      document.querySelector('.search__input--validation').setAttribute('data-validation', '');
      // extract city
      const startIndex = location.adr_address.indexOf('region') + 8;
      // add 1 day to get end date since weatherbit api needs 1 day range over two dates
      // add 'USA' for more specificity for weatherapi
      const city = location.vicinity.split(' ').join('+') + ', ' + location.adr_address.slice(startIndex, startIndex + 2) + ', USA';

      this.props.dispatch(getWeatherThunk({
        location: xssFilters.inHTMLData(city),
        date: xssFilters.inHTMLData(this.state.dateString),
      }));
    }
  }
  render() {
    return (
      <div className="search">
        <div className="search__input--validation" data-validation="">
          <input id="search" className="search__input" type="text" placeholder="Enter a location"/>
        </div>
        <div className="search__date--validation" data-validation="">
          <DatePicker
            selected={ this.state.date }
            onChange={ this.handleDateChange } 
          />
        </div>
        <a href="#" className="btn btn-submit" onClick={ this.handleSubmit }>Search</a>
        { this.props.isGetting ? <img src={ preloading } className="search__preloading" /> : void 0 }
      </div>
    );
  }
}