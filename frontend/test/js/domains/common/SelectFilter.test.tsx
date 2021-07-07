import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react'

import SelectFilter from "../../../../src/js/domains/common/SelectFilter";
import { mountWithIntl } from "../../intlHelper";

const categories = [
    {
	id: 1,
	title: "Building"
    },
    {
	id: 2,
	title: "Spot"
    }
];

const category = {
    id: 1,
    title: "Building"
};

const onChange_ = (id: number) => {
    null;
}

describe('<SelectFilter />', () => {

    const wrapper = mountWithIntl(<SelectFilter name="location_filter" value={category.id} options={categories} onChange={onChange_} />);

    it('should render 1 select components', () => {
	expect(wrapper.find('select').length).toBe(1);
    });

    it('should render 3 option components', () => {
	expect(wrapper.find('option').length).toBe(3);
    });

    it('should have the value of "" in 1st option', () => {
	expect(wrapper.find('option').get(0).props.value).toBe("0");
    });

    it('should have the label of including "Type" in 1st option', () => {
	expect(wrapper.find('option').get(0).props.children[1]).toContain("Type");
    });

    it('should have the value of "1" in 2nd option', () => {
	expect(wrapper.find('option').get(1).props.value).toBe("1");
    });

    it('should have the label of "Building" in 2nd option', () => {
	expect(wrapper.find('option').get(1).props.children).toBe("Building");
    });

    it('should have the value of "2" in 3rd option', () => {
	expect(wrapper.find('option').get(2).props.value).toBe("2");
    });

    it('should have the label of "Spot" in 3rd option', () => {
	expect(wrapper.find('option').get(2).props.children).toBe("Spot");
    });
});
