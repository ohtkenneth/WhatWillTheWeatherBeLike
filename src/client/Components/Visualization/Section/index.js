import React from 'react';
import LineGraph from '../LineGraph/index';
import Details from '../Details/index';

const Section = ({ data }) => {
  return (
    <div className="visualization__section">
      <LineGraph
        data={ data }
      />
      {/* <Details data={ data }/> */}
      {
        data.map(year => (
          <Details data={ year } />
        ))
      }
    </div>
  );
};

export default Section;