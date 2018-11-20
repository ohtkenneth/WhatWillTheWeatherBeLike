import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h1 className="heading--secondary">How does this website work?</h1>
        <p>
          This website is powered by the <a href="https://www.worldweatheronline.com/developer/api/" target="_blank">worldweatheronline</a> historical weather api. 
          <br/>
          For each date searched, the application will retrieve historical weather data the week surrounding the date minus one year, as well as hourly data for the date minus one and two years for 
          comparison. 
          <br/>
          <br/>
          The data is presented with the weekly data first for a overall snapshot of what the weather was like surrounding the date.
          The hourly data is then mapped into six and three hour intervals, respectively, to compare what the weather was like two years ago vs one year ago.
        </p>
      </div>
    </section>
  );
};

export default About;