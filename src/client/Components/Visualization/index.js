import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Hourly from './Hourly/index';

import '../weather-icons/css/weather-icons.css';

const Visualization = ({ data }) => {
  const lineColors = ['rgb(255,0,0, .5)', 'rgb(0,255,0, .5)', 'rgb(0,0,255, .5)'];
  const times = {
    '0': '12 AM',
    '300': '3 AM',
    '600': '6 AM',
    '900': '9 AM',
    '1200': '12 PM',
    '1500': '3 PM',
    '1800': '6 PM',
    '2100': '9 PM',
  };
  // create a dataset for each year searched for in getWeather.js
  const datasets = data.map((year, index) => (
    {
      label: year.weather[0].date,
      xAxisId: 'Hour',
      yAxisId: 'Temperature',
      borderColor: lineColors[index],
      data: year.weather[0].hourly.map(hour => hour.tempF),
    }
  ));
  const lineChartData = {
    labels: data[0].weather[0].hourly.map(hour => times[hour.time]),
    datasets
  };
  // y axis starts at 0
  const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
  };

  return (
    <section>
      <i className="wi wi-night-sleet"></i>
      <div>
        <Line
          data={ lineChartData }
          options={ options }
          maintainAspectRatio= {true}
        />
        {
          data.map((year, index) => (
            <Hourly key={ 'visual' + year.request[0].query + index } data={ year.weather[0] }/>
          ))
        }
      </div>
    </section>
  );
};

export default Visualization;