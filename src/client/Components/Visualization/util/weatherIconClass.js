export default function weatherIcon(desc, time) {
  // sunny, cloudy, etc
  const isDay = dayOrNight(time);
  let weatherIconClass = '';
  switch (desc) {
    case 'Sunny':
      weatherIconClass = 'wi wi-day-sunny u-color-temp-high';
      break;
    case 'Clear':
      weatherIconClass = isDay ? 'wi wi-day-sunny u-color-temp-high' : 'wi wi-night-clear';
      break;
    case 'Partly cloudy':
      weatherIconClass = isDay ? 'wi wi-day-cloudy u-color-temp-medium' : 'wi wi-night-partly-cloudy';
      break;
    case 'Cloudy':
      weatherIconClass = isDay ? 'wi wi-day-cloudy-high u-color-temp-medium' : 'wi wi-night-alt-cloudy';
      break; 
    case 'Light rain shower':
      weatherIconClass = isDay ? 'wi wi-day-showers u-color-temp-low' : 'wi wi-night-alt-showers u-color-temp-low-night';
      break;
    case 'Moderate or heavy rain shower':
    case 'Moderate rain at times':
    case 'Moderate rain':
      weatherIconClass = isDay ? 'wi wi-day-rain u-color-temp-low' : 'wi wi-night-alt-rain u-color-temp-low-night';
      break;
    case 'Patchy light rain':
    case 'Patchy rain possible':
      weatherIconClass = isDay ? 'wi wi-day-rain-mix u-color-temp-low' : 'wi wi-night-alt-rain-mix u-color-temp-low-night';
      break;
    case 'Mist':
    case 'Fog':
    case 'Freezing fog':
      weatherIconClass = isDay ? 'wi wi-day-haze u-color-temp-low' : 'wi wi-night-fog u-color-temp-low-night';
      break;
    case 'Overcast':
      weatherIconClass = isDay ? 'wi wi-day-sunny-overcast u-color-temp-medium' : 'wi wi-night-alt-cloudy';
      break;
    case 'Patchy light snow':
    case 'Light snow':
      weatherIconClass = isDay ? 'wi wi-day-snow u-color-temp-medium' : 'wi wi-night-alt-snow u-color-temp-low-night';
      break;
    case 'Moderate snow':
    case 'Moderate or heavy snow':
    case 'Heavy snow':
      weatherIconClass = isDay ? 'wi wi-day-snow-wind u-color-temp-low' : 'wi wi-night-alt-showers u-color-temp-low';
      break;
    case 'Moderate or heavy snow with thunder':
      weatherIconClass = isDay ? 'wi wi-day-snow-thunderstorm u-color-temp-low' : 'wi wi-night-alt-snow-thunderstorm u-color-temp-low';
      break;
    default:
      weatherIconClass = 'wi wi-alien';
      break;
  }

  return weatherIconClass;
}

function dayOrNight(time) {
  // returns true for day
  return time >= 9 && time <= 18;
}