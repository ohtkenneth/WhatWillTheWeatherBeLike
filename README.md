# WhatWillTheWeatherBeLike
WhatWillTheWeatherBeLike is an application to help you predit what the weather will be like based on historical weather data.

## How does it work?
This website is powered by the [worldweatheronline](https://www.worldweatheronline.com) historical weather api.
For each date searched, the application will retrieve historical weather data the week surrounding the date minus one year, as well as hourly data for the date minus one and two years for comparison.

The data is presented with the weekly data first for a overall snapshot of what the weather was like surrounding the date. The hourly data is then mapped into six and three hour intervals, respectively, to compare what the weather was like two years ago and one year ago.

This application currently supports cities in the United States.

## Usage
Visit the [application online](https://www.whatwilltheweatherbelike.com)

OR (for your own use)

Clone the repo
`git clone https://github.com/ohtkenneth/WhatWillTheWeatherBeLike.git`

Install dependencies
`npm install`

In /dist/index.html, replace the Google API Key in the googleapis script with your Places Enabled Google API Key (line 21)
`<script 
  src="https://maps.googleapis.com/maps/api/js?key=YOURGOOGLEAPIKEY&libraries=places&callback=init"
  async defer>
<script>`

Provide your environment with an environment variable named WEATHER_API_KEY (as seen in line 5 /src/server/util/getWeather.js'
`const weatherApiKey = process.env.WEATHER_API_KEY;`

Build the bundle
`npm run build:prod`

Start the server
`npm start`

Open your browser of choice to localhost:3000


