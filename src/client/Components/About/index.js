import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h1 className="heading--secondary">How does this website work?</h1>
        <p>
          This website is powered by the <a href="https://www.worldweatheronline.com/developer/api/" target="_blank">worldweatheronline</a> historical weather api.
        </p>
      </div>
    </section>
  );
};

export default About;