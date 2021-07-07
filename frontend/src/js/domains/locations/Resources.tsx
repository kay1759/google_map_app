import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Map from "../common/Map";
import Details from "./Details";
import { loadResources, select, filtering } from "./actionCreators";

const Resources = (): JSX.Element => {

    const state_ = useSelector((state: TAssociative) => state.locationReducer);

    const dispatch = useDispatch();

    useEffect(() => {
	dispatch(loadResources())
    }, []);

    const select_ = (resource: TAssociative) => {
	dispatch(select(resource));
    }

    const filtering_ = (categoryId: number) => {
	dispatch(filtering(categoryId));
    }
 
    const onClickMarker_ = (id: number) => {
	let resource = state_.get('resources').filter((item: TAssociative, index: number) => {
	    if (item.id == id) return true;
	});

	if (resource.length > 0) {
	    select_(resource[0]);
	}
    }

    const onChangeFiltering_ = (value: number) => {
	filtering_(value);
    }

    return (
	<div className="row clearfix">
	    <div id="details"><Details resource={state_.get('resource')} categoryId={state_.get('categoryId')} categories={state_.get('categories')} onChange={onChangeFiltering_} /></div>
	    <div id="map"><Map resources={state_.get('resources')} onClickMarker={onClickMarker_} /></div>
	</div>
    );

}

export default Resources;
