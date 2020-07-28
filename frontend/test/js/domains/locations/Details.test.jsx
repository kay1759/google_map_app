import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react'

import SelectFilter from "../../../../src/js/domains/common/SelectFilter.jsx";
import Details from "../../../../src/js/domains/locations/Details.jsx";

const resource = {
    id: 0,
    loc_type_id: 0,
    title: "Title 1",
    longitude: "-100.0",
    latitude: "99.0",
    image: "",
    address: ""
}

describe('<Details />', () => {
    it('should render 1 <SelectFilter /> components', () => {
	const wrapper = shallow(<Details resource={resource} />);
	expect(wrapper.find(SelectFilter).length).toBe(1);
    });
});
