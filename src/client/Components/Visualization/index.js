import React from 'react';
import mapData from './util/mapData';
import Section from './Section/index';

const Visualization = ({ data }) => {
  console.log('data from visua', data);
  const sixHourly1 = mapData(data[0].weather[0], 6);
  const threeHourly1 = mapData(data[0].weather[0], 3);
  const sixHourly2 = mapData(data[1].weather[0], 6);
  const threeHourly2 = mapData(data[1].weather[0], 3);
  // create a dataset for each year searched for in getWeather.js

  return (
    <section className="visualization">
      <h1 className="heading--secondary">{ data[0].request[0].query }</h1>
        <div>
          <Section data={ [sixHourly1, sixHourly2] }/>
          <Section data={  [threeHourly1, threeHourly2 ]}/>
        </div>
      }
    </section>
  );
};

export default Visualization;