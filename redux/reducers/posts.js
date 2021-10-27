import * as actionsTypes from "../constants";

const initialState = {
  posts: [],
  filteredPosts: [],
  favPosts: [],
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
    case actionsTypes.ADD_POST_TO_FAVOURITES:
      const post = state.posts.find((post) => post.id == action.postId);
      return {
        ...state,
        favPosts: [...state.favPosts, post],
      };
    case actionsTypes.REMOVE_POST_FROM_FAVOURITES:
      const updatedFavPosts = state.favPosts.filter(
        (post) => post.id != action.postId
      );
      return {
        ...state,
        favPosts: updatedFavPosts,
      };
    default:
      return state;
  }
};

export default postsReducer;
