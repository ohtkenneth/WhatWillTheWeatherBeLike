import React from 'react';
import LineGraph from '../LineGraph/index';
import Details from '../Details/index';

const Section = ({ data }) => {
  let intervalsHeading;

  if (data[0].hourly.length === 4) {
    intervalsHeading = <h1 className="heading--secondary">6 Hour Intervals</h1>
  } else if (data[0].hourly.length === 8) {
    intervalsHeading = <h1 className="heading--secondary">3 Hour Intervals</h1>
  }
  return (
    <div className="visualization__section">
      <div className="visualization__section__content">
        <h1 className="heading--secondary">Date: { new Date(data[0].date).toDateString().split(' ').slice(1,3).join(' ') }</h1>
        <br/>
        { intervalsHeading }
        <LineGraph
          data={ data }
        />
        <div className="visualization__section__content__details">
          {
            data.map(year => (
              <Details data={ year } />
            ))
          }
        </div>
      </div>
    </div>  
  );
};

export default Section;