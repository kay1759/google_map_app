import React from "react";

import Map from "../common/Map.jsx";
import Details from "./Details.jsx";

class Resources extends React.Component {

    componentDidMount() {
	this.props.loadResources();
    }

    _onClickMarker(id) {
	let resource = this.props.state.get('resources').filter((item, index) => {
	    if (item.id == id) return true;
	});

	if (resource.length > 0) {
	    this.props.select(resource[0]);
	}
    }

    _onChangeFiltering(value) {
	this.props.filtering(value);
    }

    render() {
	return (
	    <div className="row clearfix">
	      <div id="details"><Details resource={this.props.state.get('resource')} category={this.props.state.get('category')} categories={this.props.state.get('categories')} onChange={this._onChangeFiltering.bind(this)} /></div>
	      <div id="map"><Map resources={this.props.state.get('resources')} onClickMarker={this._onClickMarker.bind(this)} /></div>
	    </div>
	);
    }
}

export default Resources;
