import React from 'react';
import mapData from './util/mapData';
import Section from './Section/index';

const Visualization = ({ data }) => {
  const sixHourly = mapData(data[0].weather[0], 6);
  const threeHourly = mapData(data[0].weather[0], 3);
  // create a dataset for each year searched for in getWeather.js

  return (
    <section>
      <i className="wi wi-night-sleet"></i>
      <Section data={ sixHourly }/>
      <Section data={ threeHourly }/>
    </section>
  );
};

export default Visualization;