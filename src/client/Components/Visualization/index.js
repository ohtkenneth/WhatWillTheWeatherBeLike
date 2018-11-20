import React from 'react';
import mapData from './util/mapData';
import Section from './Section/index';

const Visualization = ({ data, location, date }) => {
  const weeklyData = mapData(data[0], 24);
  const sixHourlyData_1 = mapData(data[1], 6);
  const sixHourlyData_2 = mapData(data[2], 6);
  const threeHourlyData_1 = mapData(data[1], 3);
  const threeHourlyData_2 = mapData(data[2], 3);
  // create a dataset for each year searched for in getWeather.js
  // if at bottom of pages with content expanded, easier way to scroll to top
  function handleClick(e) {
    document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section className="visualization">
      {/* location is joined with '+' for weather api, join back with spaces for readability */}
      <h1 className="heading--primary">{ location.split('+').join(' ') }</h1>
      <div>
        {/* Weekly */}
        <Section data={ weeklyData } options={ { weekly: true } } date={ date }/>
        {/* Daily, 6 hour interval */}
        <Section data={ [sixHourlyData_1, sixHourlyData_2] } options= { { daily: 6} } date={ date }/>
        {/* Daily, 3 hour interval */}
        <Section data={  [threeHourlyData_1, threeHourlyData_2 ]} options= { { daily: 3} } date={ date }/>
      </div>
      <a href="#" className="btn" onClick={ handleClick }>Scroll to top</a>
    </section>
  );
};

export default Visualization;