import React from 'react';
import mapData from './util/mapData';
import Section from './Section/index';

const Visualization = ({ data }) => {
  const sixHourly1 = mapData(data[1].weather[0], 6);
  const threeHourly1 = mapData(data[1].weather[0], 3);
  const sixHourly2 = mapData(data[2].weather[0], 6);
  const threeHourly2 = mapData(data[2].weather[0], 3);
  // create a dataset for each year searched for in getWeather.js
  console.log(sixHourly1)
  // if at bottom of pages with content expanded, easier way to scroll to top
  function handleClick(e) {
    document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section className="visualization">
      <h1 className="heading--primary">{ data[1].request[0].query }</h1>
      <div>
        {/* Weekly */}
        <Section data={ data[0].weather } options={ { weekly: true } }/>
        {/* Daily, 6 hour interval */}
        <Section data={ [sixHourly1, sixHourly2] } options= { { daily: 6} } />
        {/* Dailu, 3 hour interval */}
        <Section data={  [threeHourly1, threeHourly2 ]} options= { { daily: 3} }/>
      </div>
      <a href="#" className="btn" onClick={ handleClick }>Scroll to top</a>
    </section>
  );
};

export default Visualization;