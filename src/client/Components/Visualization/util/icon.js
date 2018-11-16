export default function weatherIcon(desc, time) {
  // sunny, cloudy, etc
  let weatherIconClass = '';
  switch (desc) {
    case 'Sunny':
      weatherIconClass = 'wi wi-day-sunny';
      break;
    case 'Clear':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-clear' : 'wi wi-day-sunny';
      break;
    case 'Partly cloudy':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-partly-cloudy' : 'wi wi-day-cloudy';
      break;
    case 'Cloudy':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-alt-cloudy' : 'wi wi-day-cloudy-high';
      break; 
    case 'Light rain shower':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-alt-showers' : 'wi wi-day-showers';
      break;
    case 'Moderate or heavy rain shower':
    case 'Moderate rain at times':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-alt-rain' : 'wi wi-day-rain';
      break;
    case 'Patchy light rain':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-alt-rain-mix' : 'wi wi-day-rain-mix';
      break;
      
  }

  return weatherIconClass;
}