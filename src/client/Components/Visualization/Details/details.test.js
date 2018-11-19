import React from 'react';
import { mount } from 'enzyme';
import Details from './index';
import mapData from '../util/mapData';
import mockData from '../mockData';

describe('<Details />', () => {
  
  it('Renders weekly detailed data with options', () => {
    const wrapper = mount(<Details data={ mapData(mockData[0], 24) } options={  { weekly: true } } />);
    expect(wrapper.props().options).toBeTruthy();
  });
});