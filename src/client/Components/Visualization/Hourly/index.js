import React from 'react';
// overall icons for every 3 hours
const Hourly = ({ data }) => {
  return (
    <section className="hourly">
      <h3>{ data.date + 'Hourly data (3 hour intervals' }</h3>
      <h6>Max Temp: { data.maxtempF + 'F' }</h6>
      <h6>Min Temp: { data.mintempF + 'F' }</h6>
      <h6>Total snowfall: { data.totalSnow_cm === '0.0' ? 'None!' : data.totalSnow_cm + 'cm' }</h6>
      {
        data.hourly.map((hour, index) => (
          <div key={ 'hourly' + index }>
            <div  className="hourly__temp">
              Temperature: { hour.tempF }F
            </div>
            <div className="hourly__wind">
              Wind speed: { hour.windspeedMiles }mph
            </div>
            <div className="hourly__rain">
              Rainfall: { hour.precipMM === '0.0' ? 'None!' : hour.precipMM }mm
            </div>
            <div className="hourly__cloud">
              Cloud coverage: { hour.cloudcover }%
            </div>
            <div className="hourly__humidity">
              Humidity: { hour.humidity }%
            </div>
          </div>
        ))
      }
      
    </section>
  )
};

export default Hourly;