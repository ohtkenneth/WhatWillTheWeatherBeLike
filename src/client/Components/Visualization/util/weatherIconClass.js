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
    case 'Moderate rain':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-alt-rain' : 'wi wi-day-rain';
      break;
    case 'Patchy light rain':
    case 'Patchy rain possible':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-alt-rain-mix' : 'wi wi-day-rain-mix';
      break;
    case 'Mist':
    case 'Fog':
    case 'Freezing fog':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-fog' : 'wi wi-day-haze';
      break;
    case 'Overcast':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-alt-cloudy' : 'wi wi-day-sunny-overcast';
      break;
    case 'Patchy light snow':
    case 'Light snow':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-alt-cloudy' : 'wi wi-day-sunny-overcast';
      break;
    case 'Moderate snow':
    case 'Moderate or heavy snow':
    case 'Heavy snow':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-alt-cloudy' : 'wi wi-day-sunny-overcast';
      break;
    case 'Moderate or heavy snow with thunder':
      weatherIconClass = Number(time) > 9 ? 'wi wi-night-alt-cloudy' : 'wi wi-day-sunny-overcast';
      break;
    default:
      weatherIconClass = 'wi wi-alien';
      break;
  }

  return weatherIconClass;
}