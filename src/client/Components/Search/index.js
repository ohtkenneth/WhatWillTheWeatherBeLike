import React from 'react';
import DatePicker from "react-datepicker";
import moment from "moment";
import getWeather from './util/getWeather';
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
    // need to extract CITY, STATE from location object because conflicting location formats 
    const location = window.autocomplete.getPlace();
    const startIndex = location.adr_address.indexOf('region') + 8;
    // add 1 day to get end date since weatherbit api needs 1 day range over two dates
    const city = location.vicinity.split(' ').join('+') + ', ' + location.adr_address.slice(startIndex, startIndex + 2);

    this.props.dispatch(getWeatherThunk({
      location: city,
      date: this.state.date,
    }));
  }
  render() {
    return (
      <div className="search">
        <input id="search" type="text"
        />
        <DatePicker
          selected={ this.state.date }
          onChange={ this.handleDateChange } 
        />
        
        <a href="#" className="btn btn-submit" onClick={ this.handleSubmit }>GET!</a>
      </div>
    );
  }
}