import React from "react";

import SelectFilter from "../common/SelectFilter.jsx";

class Details extends React.Component {

    render() {
	if (this.props.resource.title == "") {
	    return (
		<div>
		  <div className="clearfix">
		    <SelectFilter name="location_filter" title="location" value={this.props.category} options={this.props.categories} onChange={this.props.onChange } />
		    <p></p>
		  </div>
		</div>
	    )
	} else {
	    return (
		<div>
		  <div className="clearfix">
		    <SelectFilter name="location_filter" title="location" value={this.props.category} options={this.props.categories} onChange={this.props.onChange } />
		    <p>{this.props.resource.title}</p>
		    <p><img src={"/images" + this.props.resource.image} alt="" /></p>
		    <p>{this.props.resource.address}</p>
		    <p>{this.props.resource.content}</p>
		  </div>
		</div>
	    )
	}
    }
}

export default Details;
