import React from 'react';
import weatherIconClass from '../util/weatherIconClass';
// overall icons for every 3 hours
const Details = ({ data }) => {
  console.log(data);
  return (
    <div className="details">
      <div className="details--general">
        <h1 className="heading--secondary">Date: { new Date(data.date).toDateString() }</h1>
        <h6>Max Temp: { data.maxtempF + 'F' }</h6>
        <h6>Min Temp: { data.mintempF + 'F' }</h6>
        <h6>Total snowfall: { data.totalSnow_cm === '0.0' ? 'None!' : data.totalSnow_cm + 'cm' }</h6>
      </div>
      <div className="details--specific">
      { 
        data.hourly.map((hour, index) => (
          <div className="hourly__details" key={ 'hourly' + index }>
            <div className="hourly__time">
              <h4 className="heading--tertiary">{ hour.timeString }</h4>
            </div>
            <i className={ weatherIconClass(hour.weatherDesc[0].value) }></i>
            <div className="hourly__desc">
              Weather descriptionn: { hour.weatherDesc[0].value } 
            </div>
            <div className="hourly__temp">
              Average Temperature: { hour.tempF }F
            </div>
            <div className="hourly__wind">
              Average Wind speed: { hour.windspeedMiles }mph
            </div>
            <div className="hourly__rain">
              Average Rainfall: { hour.precipMM === '0.0' ? 'None!' : hour.precipMM }mm
            </div>
            <div className="hourly__cloud">
              Average Cloud coverage: { hour.cloudcover }%
            </div>
            <div className="hourly__humidity">
              Average Humidity: { hour.humidity }%
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
};

export default Details;