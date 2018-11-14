import React from 'react';
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      date: moment(),
    };

    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleDateChange(date) {
    this.setState({
      date,
    }, () => console.log(this.state.date));
  }
  render() {
    return (
      <div className="search">
        <input id="search" type="text"/>
        <DatePicker
          selected={ this.state.date }
          onChange={ this.handleDateChange } 
        />

        <a href="#" className="btn btn-submit">GET!</a>
      </div>
    );
  }
}