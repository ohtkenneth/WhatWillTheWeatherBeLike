import React from 'react';
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";
import config from '../../../config.js';

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
    this.setState({
      date,
    });
  }
  handleSubmit() {
    // autocomplete input is on window object since defining callback there for after script has loaded
    // need to extract CITY, STATE from location object because conflicting location formats 
    const location = window.autocomplete.getPlace();
    const startIndex = location.adr_address.indexOf('region') + 8;

    const options = {
      url: 'https://api.weatherbit.io/v2.0/history/daily',
      method: 'get',
      params: {
        'start_date': this.state.date.format('YYYY-MM-DD'),
        'end_date': this.state.date.add(1, 'days').format('YYYY-MM-DD'),
        'city': location.vicinity + ', ' + location.adr_address.slice(startIndex, startIndex + 2),
        'units': 'I',
        'key': config.weatherbit,
      }
    };

    axios(options)
      .then(results => {
        console.log(results);
      })
      .catch(err => {
        console.log(err);
      });
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