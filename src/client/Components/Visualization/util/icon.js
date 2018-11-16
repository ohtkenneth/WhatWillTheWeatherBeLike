export default function weatherIcon({ maxTemp, clouds }) {
  // sunny, cloudy, etc
  if (clouds >= 90) {
    return {
      type: 'EH',
      iconClass: 'wi wi-cloudy',
    }
  } else if (clouds >= 70 && clouds < 90) {
    return {
      type: 'High',
      iconClass: 'wi wi-day-cloudy-high'
    }
  } else if (clouds >= 50 && clouds < 70) {
    return {
      type: 'Medium',
      iconClass: 'wi wi-day-cloudy'
    }
  } else if (clouds >= 30 && clouds < 50) {
    return {
      type: 'Low',
      iconClass: 'wi wi-day-sunny-overcast'
    }
  }

  return {
    type: 'EL',
    iconClass: 'wi wi-day-sunny',
  }

  
}