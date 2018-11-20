import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h1 className="heading--secondary">How does this website work?</h1>
        <p>
          <br/>
          This website helps you predict what the weather will be like in the future based on historical weather data.
          <br/>
          <br/>
          For each date searched, the application will retrieve historical weather data the week surrounding the inputted date minus one year, as well as hourly data for the date minus one and two years for 
          comparison. 
          <br/>
          <br/>
          The data is presented with the weekly data first for an overall snapshot of what the weather was like surrounding the date.
          The hourly data is then mapped into six and three hour intervals, respectively, to compare what the weather was like one and two years ago.
          <br/>
          <br/>
          This application currently supports cities in the United States and is powered by the <a className="link" href="https://www.worldweatheronline.com/developer/api/" target="_blank">worldweatheronline</a> historical weather api.
        </p>
      </div>
    </section>
  );
};

export default About;