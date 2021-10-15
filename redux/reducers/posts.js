import * as actionsTypes from "../constants";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_POSTS:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};

export default postsReducer;
