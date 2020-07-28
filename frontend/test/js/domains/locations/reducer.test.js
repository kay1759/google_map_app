import { fromJS } from "immutable";

import { LOCATION } from "../../../../src/js/constants/ActionTypes";
import reducer from "../../../../src/js/domains/locations/reducer";

describe("Locations reducer", () => {
    let initialState = fromJS({
	categories: [],
	category: "",
	resources: [],
	resource:  {id: 0, loc_type_id: 0, title: "", longitude: "0.0", latitude: "0.0", image: "", address: "" },
	resourcesAll: []
    });

    let initialState1 = fromJS({
	categories: [],
	category: "",
	resources: [],
	resource:  {id: 0, loc_type_id: 0, title: "", longitude: "0.0", latitude: "0.0", image: "", address: "" },
	resourcesAll: []
    });

    it('Initial isLoaded', () => {
	const state = reducer(initialState, {type: LOCATION.LOAD_RESOURCES})
	expect(state.get('resourcesAll').size).toEqual(0)
    });

    it('Initial isLoaded', () => {
	const state = reducer(initialState, {type: LOCATION.LOAD_RESOURCES})
	expect(state.get('resource').get('id')).toEqual(0)
    });

});
