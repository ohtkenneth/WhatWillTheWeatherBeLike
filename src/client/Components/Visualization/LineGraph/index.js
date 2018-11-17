import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

// doesnt care about hours
const LineGraph = ({ data }) => {
  // data will be array of HOURLY data
  console.log(data);
  const lineChartData = {
    labels: data.hourly.map(hour => hour.timeString),
    datasets: [
      {
        label: 'test',
        xAxisId: 'Hour',
        yAxisId: 'Temperature',
        borderColor: '#eee',
        data: data.hourly.map(hour => hour.tempF)
      }
    ]
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
  console.log(lineChartData.labels)
  console.log(lineChartData.datasets[0].data)
  return (
    <div className="linegraph">
      <Line
        data={ lineChartData }
        options={ options }
        maintainAspectRatio= {true}
      />
    </div>
  );
};

export default LineGraph;