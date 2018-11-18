import React from 'react';
import weatherIconClass from '../util/weatherIconClass';

const Details = ({ data, options }) => {
  return (
    <div className="details">
      {
        options.weekly 
        ? (
          <div className="details--general">
            This is weekly general data
          </div>
        )
        : (
          <div className="details--general">
            <h4 className="heading--tertiary">Date: { new Date(data.date).toDateString() }</h4>
            <h6 className="heading--quaternary u-color-temp-high">Max Temp: { data.maxtempF + 'F' }</h6>
            <h6 className="heading--quaternary u-color-temp-low">Min Temp: { data.mintempF + 'F' }</h6>
            <h6 className="heading--quaternary">Total snowfall: { data.totalSnow_cm === '0.0' ? 'None!' : data.totalSnow_cm + 'cm' }</h6>
          </div>
        )
      }
      <div className="details--specific">
      { 
        options.weekly
        ? data.map((day, index) => (
          <div className="weekly__details" key={ 'weekly' + index }>
            <div className="weekly__daily">
              <h4 className="heading--tertiary">{ new Date(day.date).toDateString() }</h4>
            </div> 
            {/* Give weatherIconClass default hour value of 15 since no night or day */}
            <i className={ weatherIconClass(day.hourly[0].weatherDesc[0].value, 15) }/>
            <p>
              Weather description: { day.hourly[0].weatherDesc[0].value }
            </p>
            <p>
              Average Temperature: { day.hourly[0].tempF }
            </p>
            <p className="daily__wind">
              Average Wind Speed: { day.hourly[0].windspeedMiles }mph
            </p>
            <p className="daily__rain">
              Average Rainfall: { day.hourly[0].precipMM }mm
            </p>
            <p className="daily__cloud">
              Average Cloud Coverage: { day.hourly[0].cloudcover }%
            </p>
            <p className="daily__humidity">
              Average Humidity: { day.hourly[0].humidity }%
            </p>
          </div>
        ))
        : data.hourly.map((hour, index) => (
          <div className="hourly__details" key={ 'hourly' + index }>
            <div className="hourly__time">
              <h4 className="heading--tertiary">{ hour.timeString }</h4>
            </div>
            <i className={ weatherIconClass(hour.weatherDesc[0].value, hour.time) }></i>
            <div className="hourly__desc">
              Weather description: { hour.weatherDesc[0].value } 
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