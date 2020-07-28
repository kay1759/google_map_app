import { LOCATION } from "../../constants/ActionTypes";

export const loadResources = (category) => {
    return {
	type: LOCATION.LOAD_RESOURCES,
	payload: null
    };
}

export const receiveResources = (json) => {
    return {
	type: LOCATION.RECEIVE_RESOURCES,
	categories: json.categories,
	resources: json.resources
    };
}

export const select = (resource) => {
    return {
	type: LOCATION.SELECT_RESOURCE,
	resource: resource
    }
}

export const filtering = (category) => {
    return {
	type: LOCATION.FILTERING_RESOURCE,
	category: category
    }
}
