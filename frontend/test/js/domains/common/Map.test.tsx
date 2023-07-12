import { shallow, mount, render, configure } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
configure({ adapter: new Adapter() });

import React from 'react'
import GoogleMapReact from 'google-map-react';

import Map from "../../../../src/js/domains/common/Map";

describe('<Map />', () => {
    it('should render 1 GoogleMapReact components', () => {
	const wrapper = shallow(<Map resources={[]} onClickMarker={(id) => {null}} />);
	expect(wrapper.find(GoogleMapReact).length).toBe(1);
    });
});
