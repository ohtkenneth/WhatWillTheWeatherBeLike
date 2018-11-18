import React from 'react';
import LineGraph from '../LineGraph/index';
import Details from '../Details/index';

export default class Section extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      shouldDisplayContent: props.options.weekly ? true : false,
    };
    console.log(this.props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    // stuff
    console.log('i was clicked')
    this.setState((prevState) => ({
      shouldDisplayContent: !prevState.shouldDisplayContent,
    }));
  }
  render() {
    let intervalsHeading;
    let buttonHeading;
    const data = this.props.data;
    const options = this.props.options;

    if (options.daily === 6) {
      intervalsHeading = (
        <>
          <h1 className="heading--secondary">Date(s): { new Date(data[0].date).toDateString().split(' ').slice(1,3).join(' ') }</h1>
            <br/>
          <h1 className="heading--secondary">6 Hour Intervals</h1>
        </>
      );
      buttonHeading = (
        <>
          <h1>Daily weather (6 hour intervals)</h1>
        </>
      );
    } else if (options.daily === 3) {
      intervalsHeading = (
        <>
          <h1 className="heading--secondary">Date(s): { new Date(data[0].date).toDateString().split(' ').slice(1,3).join(' ') }</h1>
            <br/>
          <h1 className="heading--secondary">3 Hour Intervals</h1>
        </>
      );
      
      buttonHeading = (
        <>
          <h1>Daily weather (3 hour intervals)</h1>
        </>
      );
    } else {
      intervalsHeading = <h1 className="heading--secondary">Week following: { new Date(data[0].date).toDateString() }</h1>
      buttonHeading = (
        <>
          <h1>Weekly weather</h1>
        </>
      );
    }
    return (
      <div className="visualization__section">
        <a href="#" className="btn" onClick={ this.handleClick }>Toggle Content</a>
        { 
          this.state.shouldDisplayContent ? (
            <div className="visualization__section__content">
              { intervalsHeading }
              <LineGraph
                data={ data }
                options={ options }
              />
              <div className="visualization__section__content__details">
              {/* if  weekly data, then should not map data as data is single object */}
                {
                  options.weekly ? <Details data={ data } options={ options } /> : data.map((year, index) => (
                    <Details 
                      key={ 'daily' + index }
                      data={ year }
                      options={ options } 
                    />
                  ))
                }
              </div>
            </div>
          ) : <h1>{ buttonHeading }</h1>
        }
      </div>  
    );
  }
}