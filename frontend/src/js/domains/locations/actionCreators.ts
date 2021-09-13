import { LOCATION } from "../../constants/ActionTypes";

const locale: string = (window as any).locale;

export const loadResources = () => {
  const query = `{ 
  categories(locale: "${locale}")
  {
    id
    title
  }
  resources(locale: "${locale}")
  {
    id
    title
    address
    image
    locTypeId
    latitude
    longitude
  }
}`;

  return {
    type: LOCATION.LOAD_RESOURCES,
    query: query,
  };
};

export const receiveResources = (json: TAssociative) => {
  return {
    type: LOCATION.RECEIVE_RESOURCES,
    categories: json.categories,
    resources: json.resources,
  };
};

export const select = (resource: TAssociative) => {
  return {
    type: LOCATION.SELECT_RESOURCE,
    resource: resource,
  };
};

export const filtering = (categoryId: number) => {
  return {
    type: LOCATION.FILTERING_RESOURCE,
    categoryId: categoryId,
  };
};
