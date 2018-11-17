import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

// doesnt care about hours
// should work for multiple datasets
const LineGraph = ({ data }) => {
  // data will be array of HOURLY data
  const lineColors = ['rgba(0,218,87,.6)', 'rgba(0,122,255,.6)', 'rgba(180,0,144,.6)', ];
  const lineChartData = {
    labels: data[0].hourly.map(hour => hour.timeString),
    datasets: data.map((year, index) => (
      {
        label: new Date(year.date).toDateString(),
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