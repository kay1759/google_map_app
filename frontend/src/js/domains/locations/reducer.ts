import { fromJS } from 'immutable';

import { LOCATION } from '../../constants/ActionTypes';

const initialState = fromJS({
    categories: [],
    categoryId: 0,
    resources: [],
    resource: {
        id: 0,
        loc_type_id: 0,
        title: '',
        longitude: '0.0',
        latitude: '0.0',
        image: '',
        address: '',
    },
    resourcesAll: [],
});

export default (state: TAssociative = initialState, action: TAssociative) => {
    switch (action.type) {
        case LOCATION.RECEIVE_RESOURCES:
            return state
                .update('categories', () => {
                    return action.categories;
                })
                .update('resources', () => {
                    return action.resources;
                })
                .update('resourcesAll', () => {
                    return action.resources;
                });

        case LOCATION.SELECT_RESOURCE:
            return state.update('resource', () => {
                return action.resource;
            });

        case LOCATION.FILTERING_RESOURCE:
            let resources = state.get('resourcesAll');
            if (action.categoryId != 0) {
                resources = state
                    .get('resourcesAll')
                    .filter(function (loc: TAssociative) {
                        return loc.loc_type_id == action.categoryId;
                    });
            }

            return state
                .update('categoryId', () => {
                    return action.categoryId;
                })
                .update('resources', () => {
                    return resources;
                })
                .update('resource', () => {
                    return {
                        id: 0,
                        loc_type_id: 0,
                        title: '',
                        longitude: '0.0',
                        latitude: '0.0',
                        image: '',
                        address: '',
                    };
                });

        default:
            return state;
    }
};
