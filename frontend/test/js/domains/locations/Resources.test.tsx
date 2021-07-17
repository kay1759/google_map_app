import { fromJS } from "immutable";

import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react'
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Map from "../../../../src/js/domains/common/Map";
import Details from "../../../../src/js/domains/locations/Details";
import Resources from "../../../../src/js/domains/locations/Resources";
import reducer from "../../../../src/js/domains/locations/reducer";
import { loadResources, select, filtering } from "../../../../src/js/domains/locations/actionCreators";

describe('<Resources />', () => {
    const state = {
	reducer: fromJS({
	    categories: [],
	    categoryId: 0,
	    resources: [],
	    resource:  {id: 0, locTypeId: 0, title: "", longitude: "0.0", latitude: "0.0", image: "", address: "" },
	    resourcesAll: []
	})
    };

    const store = createStore(
	combineReducers({
	    reducer
	})
    );

    const wrapper = shallow(
	    <Provider store={store}>
	    <Resources />
	    </Provider>
    );

    it("state", () => {
	expect(store.getState()).toEqual(state);
    })

    it("dispatch loadResources", () => {
    	expect(() => {store.dispatch(loadResources())}).not.toThrow(ReferenceError)
    })

    it("dispatch select", () => {
    	expect(() => {store.dispatch(select({}))}).not.toThrow(ReferenceError)
    })

    it("dispatch filtering", () => {
    	expect(() => {store.dispatch(filtering(0))}).not.toThrow(ReferenceError)
    })

    it("state resourcesAll size", () => {
	expect(store.getState().reducer.get('resourcesAll').size).toEqual(0);
    })

    it("state resourcesAll size", () => {
	expect(wrapper.props().value.store).toEqual(store);
    })

});
