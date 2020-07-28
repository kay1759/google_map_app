import { fromJS } from "immutable";

import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react'

import Map from "../../../../src/js/domains/common/Map.jsx";
import Details from "../../../../src/js/domains/locations/Details.jsx";
import Resources from "../../../../src/js/domains/locations/Resources.jsx";

const state = fromJS({})

const nullfunc = (() => {
    return null;
});

describe('<Resources />', () => {
    const wrapper = shallow(<Resources state={state} loadResources={nullfunc} />);

    it('should render 1 <Map /> components', () => {
	expect(wrapper.find(Map).length).toBe(1);
    });

    it('should render 1 <Details /> components', () => {
	expect(wrapper.find(Details).length).toBe(1);
    });
});
