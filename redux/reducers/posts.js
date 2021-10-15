import * as actionsTypes from "../constants";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_POSTS:
      return { ...state, posts: action.posts };
    case actionsTypes.FETCH_IMAGES_TO_POSTS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id == action.postId
            ? {
                ...post,
                images: action.images,
              }
            : post
        ),
      };
    default:
      return state;
  }
};

export default postsReducer;
