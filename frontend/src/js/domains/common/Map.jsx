import React from "react"
import GoogleMapReact from 'google-map-react';
import * as Config from "../../constants/Config";

const K_WIDTH = 32;
const K_HEIGHT = 32;

const greatPlaceStyle = {
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT
};

const Marker = ({ loc_type_id }) => (
    <div style={greatPlaceStyle}>
      <img src={ "/marker_" + loc_type_id + ".svg" }
	   style={{
	       width: K_WIDTH,
	       height: K_HEIGHT,
	       cursor: 'pointer'
	   }} />
       </div>
);

class Map extends React.Component {
    render() {
	return (
            <GoogleMapReact
              bootstrapURLKeys={{ key: Config.GOOGLE_MAP_API_KEY }}
              defaultCenter={ Config.GOOGLE_MAP_CENTRE }
              defaultZoom={ Config.GOOGLE_MAP_ZOOM }
              onChildClick={(key, childProps) => {this.props.onClickMarker(key)}}
>
	      {this.props.resources.map( (point) => {
		  return (<Marker
				id = {point.id}
				key = {point.id}
				lat = {point.latitude}
				lng = {point.longitude}
				loc_type_id = {point.loc_type_id}
			    />)})}
            </GoogleMapReact>
	);
  }
}
export default Map
