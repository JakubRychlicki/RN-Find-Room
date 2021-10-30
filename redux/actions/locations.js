import * as actionsTypes from "../constants";

export const addLocation = (location) => {
  return {
    type: actionsTypes.ADD_LOCATION,
    location,
  };
};

export const removeLocation = (locationId) => {
  return {
    type: actionsTypes.REMOVE_LOCATION,
    locationId,
  };
};
