import React from 'react';
import LineGraph from '../LineGraph/index';
import Details from '../Details/index';

export default class Section extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      shouldDisplayContent: props.options.weekly ? true : false,
      contentType: props.options.weekly ? 'weekly-content' : 'daily-content-' + props.options.daily,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      shouldDisplayContent: !prevState.shouldDisplayContent,
    }));
    // put the selected content into view
    document.getElementById(this.state.contentType).scrollIntoView(true, { behavior: 'smooth' });
  }
  render() {
    const data = this.props.data;
    const options = this.props.options;
    let dateString = options.weekly 
        ? 'Daily Average Temperature for week of - ' + new Date(data[0].date).toDateString() 
        : 'Hourly Average Temperature comparison between - ' + data.map(year => new Date(year.date).toDateString()).join(' & ');

    if (options.daily === 6) {
      dateString = (
        <React.Fragment>
          <h1 className="heading--secondary">{ dateString }</h1>
          <h1 className="heading--tertiary">(6 Hour Intervals)</h1>
        </React.Fragment>
      ) ;
    } else if (options.daily === 3) {
      dateString = (
        <React.Fragment>
          <h1 className="heading--secondary">{ dateString }</h1>
          <h1 className="heading--tertiary">(3 Hour Intervals)</h1>
        </React.Fragment>
      );
    } else {
      dateString = (
        <React.Fragment>
          <h1 className="heading--secondary">{ dateString }</h1>
        </React.Fragment>
      );
    }
    return (
      <div className="visualization__section">
        <a id={ this.state.contentType } href="#" className="btn btn-secondary" onClick={ this.handleClick }>Toggle Content</a>
        <br/>
        { dateString }
        { 
          this.state.shouldDisplayContent ? (
            // id based on what type of content it is
            <div className="visualization__section__content">
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
          ) : void 0
        }
      </div>  
    );
  }
}