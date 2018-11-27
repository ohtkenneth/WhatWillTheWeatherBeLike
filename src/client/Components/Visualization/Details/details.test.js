import React from 'react';
import { shallow, mount } from 'enzyme';
import Details from './index';
import mapData from '../util/mapData';
// mockData[0] = weekly data
// mockData[1] = daily hourly data
import mockData from '../mockData';

describe('<Details />', () => {
  it ('Renders', () => {
    const wrapper = shallow(<Details data={ mapData(mockData[0], 24) } options={  { weekly: true } } />);
    
    expect(wrapper.find('.details')).toBeTruthy();
  })

  it('Renders weekly detailed data', () => {
    const wrapper = shallow(<Details data={ mapData(mockData[0], 24) } options={  { weekly: true } } />);

    expect(wrapper.find('.weekly__daily').length).toEqual(8);
  });

  it('Renders daily detailed data at 6 hour intervals', () => {
    const wrapper = shallow(<Details data={ mapData(mockData[1], 6) } options={  { daily: 6 } } />);

    expect(wrapper.find('.hourly__details').length).toEqual(4);
  });

  it('Renders daily detailed data at 3 hour intervals', () => {
    const wrapper = shallow(<Details data={ mapData(mockData[1], 3) } options={  { daily: 3 } } />);

    expect(wrapper.find('.hourly__details').length).toEqual(8);
  });

  it('Accepts weekly options props', () => {
    const wrapper = mount(<Details data={ mapData(mockData[1], 6) } options={  { daily: 6 } } />);

    expect(wrapper.props().options).toBeTruthy();
    expect(wrapper.props().options.daily).toEqual(6);
  });

  it('Accepts daily options props', () => {
    const wrapper = mount(<Details data={ mapData(mockData[1], 6) } options={  { daily: 6 } } />);

    expect(wrapper.props().options).toBeTruthy();
    expect(wrapper.props().options.daily).toEqual(6);
  });
});