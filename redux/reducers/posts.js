import * as actionsTypes from "../constants";

const initialState = {
  posts: [],
  filteredPosts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_POSTS:
      return { ...state, posts: action.posts, filteredPosts: action.posts };
    case actionsTypes.FETCH_IMAGES_TO_POSTS:
      const updatedPosts = state.posts.map((post) =>
        post.id == action.postId
          ? {
              ...post,
              images: action.images,
            }
          : post
      );
      return {
        ...state,
        posts: updatedPosts,
        filteredPosts: updatedPosts,
      };
    case actionsTypes.SET_FILTERED_POSTS:
      const appliedFilters = action.filters;

      const updatedFilteredPosts = state.posts.filter((post) => {
        if (
          post.price >= appliedFilters.minPrice &&
          post.price <= appliedFilters.maxPrice
        ) {
          if (post.city == appliedFilters.city || appliedFilters.city == "") {
            return true;
          }
        }
        return false;
      });
      return { ...state, filteredPosts: updatedFilteredPosts };
    default:
      return state;
  }
};

export default postsReducer;
