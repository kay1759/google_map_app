import { fromJS } from "immutable";

import { LOCATION } from "../../../../src/js/constants/ActionTypes";
import * as Actions from "../../../../src/js/domains/locations/actionCreators";

describe("Locations actionCreators", () => {

    const json = {
	categories: [
	    {
		id: 1,
		title: "Building"
	    },
	    {
		id: 2,
		title: "Spot"
	    }
	],
	resources: [
	    {
		address: "100 Birdwood Ave, Melbourne VIC 3004",
		id: 1,
		image: "/locations/botanic_garden.jpg",
		latitude: -37.8300003,
		loc_type_id: 2,
		longitude: 144.976088,
		title: "Royal Botanic Gardens"
	    },
	    {
		address: "328 Swanston St, Melbourne VIC 3000",
		id: 2,
		image: "/locations/state_library.jpg",
		latitude: -37.8098044,
		loc_type_id: 1,
		longitude: 144.9629957,
		title: "State Library Victoria"
	    }]
    }

    it("action type", () => {
	expect(Actions.receiveResources(json).type).toEqual(LOCATION.RECEIVE_RESOURCES);
    });

    it("count of categories", () => {
	expect(Actions.receiveResources(json).categories.length).toEqual(2);
    });

    it("count of resources", () => {
	expect(Actions.receiveResources(json).resources.length).toEqual(2);
    });

    it("title of 1st resources", () => {
	expect(Actions.receiveResources(json).resources[0]["title"]).toEqual("Royal Botanic Gardens");
    });
});
