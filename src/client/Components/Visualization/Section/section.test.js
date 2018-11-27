import React from 'react';
import { shallow, mount } from 'enzyme';
import Section from './index';
import mapData from '../util/mapData';
// mockData[0] = weekly data
// mockData[1] = daily hourly data
import mockData from '../mockData';

const weeklyData = mapData(mockData[0], 24);
const weeklyOptions = { weekly: true };

const daily6_one = mapData(mockData[1], 6);
const daily6_two = mapData(mockData[2], 6);
const daily6Options = { daily: 6 };

const daily3_one = mapData(mockData[1], 3);
const daily3_two = mapData(mockData[1], 3);
const daily3Options = { daily: 3 };

describe('<Section />', () => {
  it('Renders weekly data', () => {
    const wrapper = shallow(<Section data={ weeklyData } options={ weeklyOptions }/>);
    expect(wrapper.find('.visualization__section')).toBeTruthy();
  });

  // if hourly data, then section expects array of two datasets
  it('Accepts daily options with 6 hour intervals', () => {
    const wrapper = mount(<Section data={ [daily6_one, daily6_two] } options={ daily6Options }/>);
    expect(wrapper.props().data.length).toEqual(2);
    expect(wrapper.props().options.daily).toEqual(6);
  });

  it('Renders daily data with 6 hour intervals', () => {
    const wrapper = mount(<Section data={ [daily6_one, daily6_two] } options={ daily6Options }/>);
    expect(wrapper.find('.visualization__section')).toBeTruthy();
  });

  it('Accepts daily options with 3 hour intervals', () => {
    const wrapper = mount(<Section data={ [daily3_one, daily3_two] } options={ daily3Options }/>);
    expect(wrapper.props().data.length).toEqual(2);
    expect(wrapper.props().options.daily).toEqual(3);
  });

  it('Renders daily data with 3 hour intervals', () => {
    const wrapper = mount(<Section data={ [daily3_one, daily3_two] } options={ daily3Options }/>);
    expect(wrapper.find('.visualization__section')).toBeTruthy();
  });
});