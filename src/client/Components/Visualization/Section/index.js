import React from 'react';
import LineGraph from '../LineGraph/index';
import Details from '../Details/index';

const Section = ({ data }) => {
  console.log(data[0])
  return (
    <div className="visualization__section">
      <div className="visualization__section__content">
        <LineGraph
          data={ data }
        />
        {/* <Details data={ data }/> */}
        <div className="visualization__section__content__details">
          {
            data.map(year => (
              <Details data={ year } />
            ))
          }
        </div>
      </div>
    </div>  
  );
};

export default Section;