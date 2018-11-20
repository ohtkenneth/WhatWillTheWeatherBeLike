// options: hourly(3, 6)
const times = {
  '3': [
    [0, '12AM - 3AM'],
    [3, '3AM - 6AM'],
    [6, '6AM - 9AM'],
    [9, '9AM - 12PM (Noon)'],
    [12, '12PM - 3PM'],
    [15, '3PM - 6PM'],
    [18,'6PM - 9PM'],
    [21, '9PM - 12AM (Midnight)']
  ],
  '6': [
    [0, 'Early Morning (12AM - 6AM)'], 
    [6, 'Morning (6AM - 12PM)'], 
    [12, 'Afternoon (12PM - 6PM)'],
    [18, 'Night (6PM - 12AM)']]
}
export default function(data, interval) {
  let mappedData = [];
  let currData = {};

  if (interval === 24) {
    // give each day its date string
    return data.weather.map(day => {
      day.dateString = new Date(day.date).toDateString();
      return day;
    });
  }

  for (let i = 0; i < data.weather[0].hourly.length; i+=1) {
    // if multiple of 6, new chunk
    if (i % interval === 0 && i !== 0) {
      // start new object for new chunk
      mappedData.push(currData);
      currData = {};
    }
    Object.keys(data.weather[0].hourly[i]).forEach(key => {
      // if it is not prop with non numerical value
      if (key === 'winddir16Point' || key === 'weatherIconUrl' || key === 'weatherDesc' || key === 'weatherCode') {
        // will have prop from last hour in chunk
        currData[key] = data.weather[0].hourly[i][key];
      } else {
        // add it to currData
        currData[key] = (parseFloat(currData[key]) || 0) + parseFloat(data.weather[0].hourly[i][key]);
      }
    });
  }
  // push in remaining
  mappedData.push(currData);
  // map the times and values since they were added up
  mappedData.map((hour, index) => {
    // get average of intervals only if numerical properties
    Object.keys(hour).forEach(key => {
      if (key !== 'dateString' && key !== 'weatherIconUrl' && key !== 'weatherDesc' && key !== 'weatherCode' && key !== 'winddir16Point') {
        hour[key] = Math.floor(hour[key] / interval);
      }
    });
    // map the times and to above times array
    hour.time = interval === 3 ? times['3'][index][0] : times['6'][index][0];
    hour.timeString = interval === 3 ? times['3'][index][1] : times['6'][index][1];
    hour.dateString = new Date(data.weather[0].date).toDateString();

    return hour;
  });
  // return object with same structure as original data
  return Object.assign({}, data.weather[0], { hourly: mappedData });
}