import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { fromJS } from "immutable";

import React from 'react'
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Container from "../../../../src/js/domains/locations/container";
import reducer from "../../../../src/js/domains/locations/reducer";
import { loadResources, select, filtering } from "../../../../src/js/domains/locations/actionCreators";

// test
const shallowWithStore = (component, store) => {
    const context = {
	store
    }
    return shallow(component, { context })
}

describe('Container', () => {
    const state = {
	reducer: fromJS({
	    categories: [],
	    category: "",
	    resources: [],
	    resource:  {id: 0, loc_type_id: 0, title: "", longitude: "0.0", latitude: "0.0", image: "", address: "" },
	    resourcesAll: []
	})
    };

    const rootReducer = combineReducers({
	reducer
    });

    const store = createStore(
	rootReducer
    );

    const wrapper = shallowWithStore(
	    <Provider store={store}>
	    <Container />
	    </Provider>
    );

    it("state", () => {
	expect(store.getState()).toEqual(state);
    })

    it("dispatch loadResources", () => {
    	expect(() => {store.dispatch(loadResources(1))}).not.toThrow(ReferenceError)
    })

    it("dispatch select", () => {
    	expect(() => {store.dispatch(select(1))}).not.toThrow(ReferenceError)
    })

    it("dispatch filtering", () => {
    	expect(() => {store.dispatch(filtering(1))}).not.toThrow(ReferenceError)
    })

    it("disptach unexisted function - Throw Excepiton", () => {
   	expect(() => {store.dispatch(requestResources)}).toThrow(ReferenceError)
    })

    it("state resourcesAll size", () => {
	expect(store.getState().reducer.get('resourcesAll').size).toEqual(0);
    })

    it("state resourcesAll size", () => {
	expect(wrapper.props().value.store).toEqual(store);
    })

})
