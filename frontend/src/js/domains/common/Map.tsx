import React from "react";
import GoogleMapReact from "google-map-react";
import * as Config from "../../constants/Config";

const K_WIDTH = 32;
const K_HEIGHT = 32;

const Marker = (params: TAssociative): JSX.Element => (
  <div
    style={{
      position: "absolute",
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT,
    }}
  >
    <img
      src={"/marker_" + params.locTypeId + ".svg"}
      style={{
        width: K_WIDTH,
        height: K_HEIGHT,
        cursor: "pointer",
      }}
    />
  </div>
);

type TProps = {
  onClickMarker: (id: number) => void;
  resources: TAssociative;
};

const Map = (props: TProps): JSX.Element => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: Config.GOOGLE_MAP_API_KEY }}
      defaultCenter={Config.GOOGLE_MAP_CENTRE}
      defaultZoom={Config.GOOGLE_MAP_ZOOM}
      onChildClick={(key: number, childProps: TAssociative) => {
        props.onClickMarker(key);
      }}
    >
      {props.resources.map((point: TAssociative) => {
        return (
          <Marker
            id={point.id}
            key={point.id}
            lat={point.latitude}
            lng={point.longitude}
            locTypeId={point.locTypeId}
          />
        );
      })}
    </GoogleMapReact>
  );
};

export default Map;
