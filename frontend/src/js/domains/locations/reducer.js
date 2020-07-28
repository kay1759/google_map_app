import { fromJS } from "immutable";

import { LOCATION } from "../../constants/ActionTypes";

const initialState = fromJS({
    categories: [],
    category: "",
    resources: [],
    resource:  {id: 0, loc_type_id: 0, title: "", longitude: "0.0", latitude: "0.0", image: "", address: "" },
    resourcesAll: []
});

export default (state = initialState, action) => {
    switch (action.type) {
    case LOCATION.RECEIVE_RESOURCES:
	return state.update("categories",() => {return action.categories;})
	    .update("resources", () => {return action.resources;})
	    .update("resourcesAll", () => {return action.resources;});

    case LOCATION.SELECT_RESOURCE:
	return state.update("resource", () => {return action.resource;});

    case LOCATION.FILTERING_RESOURCE:
	let resources = state.get('resourcesAll');
	if (action.category != "") {
	    resources = state.get('resourcesAll').filter(function(loc) {
		return (loc.loc_type_id == parseInt(action.category));
	    });
	}

	return state.update("category", () => {return action.category;})
	    .update("resources", () => {return resources;})
	    .update("resource", () => {return {id: 0, loc_type_id: 0, title: "", longitude: "0.0", latitude: "0.0", image: "", address: "" };});

    default:
	return state
    }
}
