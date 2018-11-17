import React from 'react';
import weatherIconClass from '../util/weatherIconClass';
// overall icons for every 3 hours
const Details = ({ data }) => {
  return (
    <section className="hourly">
      {/* <h3>{ data.date + 'Hourly data' }</h3>
      <h6>Max Temp: { data.maxtempF + 'F' }</h6>
      <h6>Min Temp: { data.mintempF + 'F' }</h6>
      <h6>Total snowfall: { data.totalSnow_cm === '0.0' ? 'None!' : data.totalSnow_cm + 'cm' }</h6> */}
      {
        data.hourly.map((hour, index) => (
          <div key={ 'hourly' + index }>
            <div className="hourly__desc">
              { hour.weatherDesc[0].value } <i className={ weatherIconClass(hour.weatherDesc[0].value) }></i>
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
      
    </section>
  )
};

export default Details;