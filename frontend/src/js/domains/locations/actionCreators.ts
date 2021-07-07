import { LOCATION } from "../../constants/ActionTypes";

export const loadResources = () => {
    return {
	type: LOCATION.LOAD_RESOURCES,
	payload: null
    };
}

export const receiveResources = (json: TAssociative) => {
    return {
	type: LOCATION.RECEIVE_RESOURCES,
	categories: json.categories,
	resources: json.resources
    };
}

export const select = (resource: TAssociative) => {
    return {
	type: LOCATION.SELECT_RESOURCE,
	resource: resource
    }
}

export const filtering = (categoryId: number) => {
    return {
	type: LOCATION.FILTERING_RESOURCE,
	categoryId: categoryId
    }
}
