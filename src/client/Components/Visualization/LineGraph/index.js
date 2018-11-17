import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

// doesnt care about hours
// should work for multiple datasets
const LineGraph = ({ data }) => {
  // data will be array of HOURLY data
  const lineColors = ['rgba(0,255,0,.3)', 'rgba(0,0,255,.3)', 'rgba(255,0,0,.5)', ];
  const lineChartData = {
    labels: data[0].hourly.map(hour => hour.timeString),
    datasets: data.map((year, index) => (
      {
        label: year.date,
        xAxisId: 'Hour',
        yAxisId: 'Temperature',
        borderColor: lineColors[index],
        data: year.hourly.map(hour => hour.tempF),
        backgroundColor: 'rgba(0,0,0,0)'
      }
    ))
  }
  // y axis starts at 0
  const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false
            }
        }]
    }
  };
  return (
    <div className="visualization__section--linegraph">
      <Line
        data={ lineChartData }
        options={ options }
        maintainAspectRatio="false"
      />
    </div>
  );
};

export default LineGraph;