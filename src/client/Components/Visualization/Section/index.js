import React from 'react';
import LineGraph from '../LineGraph/index';
import Details from '../Details/index';

const Section = ({ data }) => {
  return (
    <section className="section">
      <LineGraph
        data={ data }
      />
      <Details data={ data }/>
    </section>
  );
};

export default Section;