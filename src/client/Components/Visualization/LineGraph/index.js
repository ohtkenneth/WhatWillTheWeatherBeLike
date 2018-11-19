import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

// doesnt care about hours
// should work for multiple datasets
const LineGraph = ({ data, options }) => {
  // data will be array of HOURLY data
  const lineColors = ['rgba(35,158,175, 0.6)', 'rgba(0,218,87, 0.6)', 'rgba(0,122,255, 0.6)', 'rgba(180,0,144, 0.6)', 'rgba(175,60,1970.6)', 'rgba(216,157,68, 0.6)', 'rgba(175,60,197, 0.6)',  ];
  let lineChartData;
  let chartTitle;
  
  if (options.weekly) {
    let labels = data.map(day => day.dateString);
    chartTitle = `Daily Average Temperatures following the week of ${data[0].dateString}`;
    lineChartData = {
      labels: labels,
      datasets: [
        {
          label: `Daily Average Temperature`,
          xAxisId: 'Hour',
          yAxisId: 'Temperature',
          borderColor: lineColors[0],
          backgroundColor: 'rgba(0,0,0,0)',
          data: data.map(day => day.hourly[0].tempF),
          pointBorderWidth: data.map(day => 3),
        }
      ]
    }
  } else {
    if (options.daily === 3) {
      chartTitle = `3 Hour Interval Average Temperature Comparison of ${new Date(data[0].date).toDateString()} and ${new Date(data[1].date).toDateString()}`;
    } else {
      chartTitle = `6 Hour Interval Average Temperature Comparison of ${new Date(data[0].date).toDateString()} and ${new Date(data[1].date).toDateString()}`;
    }
    lineChartData = {
      labels: data[0].hourly.map(hour => hour.timeString),
      datasets: data.map((year, index) => (
        {
          label: new Date(year.date).toDateString(),
          xAxisId: 'Hour',
          yAxisId: 'Temperature',
          borderColor: lineColors[index],
          data: year.hourly.map(hour => hour.tempF),
          backgroundColor: 'rgba(0,0,0,0)',
          borderCapStyle: 'rounded',
          pointBorderWidth: data[0].hourly.map(hour => 3),
        }
      )),
    };
  }
  
  // y axis starts at 0
  const lineChartOptions = {
    maintainAspectRatio: false,
    legend: {
      fontSize: '15px',
    },
    title: {
      display: true,
      text: chartTitle,
      padding: 20,
    },
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
        options={ lineChartOptions }
      />
    </div>
  );
};

export default LineGraph;