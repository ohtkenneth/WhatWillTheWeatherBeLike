import React from 'react';
import mapData from './mapData';
import mockData from '../mockData';

describe('mapData util function', () => {
	it ('maps data from onlineweather api 6 hour intervals', () => {
	const mappedData = mapData(mockData[1], 6);

		expect(typeof mappedData).toBe('object');
		expect(mappedData).toHaveProperty('date');
		expect(mappedData).toHaveProperty('hourly');
		expect(mappedData.hourly.length).toEqual(4);
	});
	
	it ('maps data from onlineweather api 8 hour intervals', () => {
		const mappedData = mapData(mockData[1], 3);
	
			expect(typeof mappedData).toBe('object');
			expect(mappedData).toHaveProperty('date');
			expect(mappedData).toHaveProperty('hourly');
			expect(mappedData.hourly.length).toEqual(8);
		});
});