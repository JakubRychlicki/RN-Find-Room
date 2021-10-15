import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

import postsReducer from "./reducers/posts";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
