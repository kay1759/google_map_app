import React from "react";

import SelectFilter from "../common/SelectFilter";

type TProps = {
  resource: TAssociative;
  categoryId: number;
  categories: { id: number; title: string }[];
  onChange: (value: number) => void;
};

const Details = (props: TProps): JSX.Element => {
  return (
    <div>
      <div className="clearfix">
        <SelectFilter
          name="location_filter"
          value={props.categoryId}
          options={props.categories}
          onChange={props.onChange}
        />
        {(() => {
          if (props.resource.title != "") {
            return (
              <div>
                <p>{props.resource.title}</p>
                <p>
                  <img src={"/images" + props.resource.image} alt="" />
                </p>
                <p>{props.resource.address}</p>
                <p>{props.resource.content}</p>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default Details;
