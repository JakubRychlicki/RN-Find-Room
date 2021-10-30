import * as actionsTypes from "../constants";

const initialState = {
  locations: [],
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.location],
      };
    case actionsTypes.REMOVE_LOCATION:
      const updatedLocations = state.locations.filter(
        (location) => location.id != action.locationId
      );
      return {
        ...state,
        locations: updatedLocations,
      };
    default:
      return state;
  }
};

export default locationsReducer;
