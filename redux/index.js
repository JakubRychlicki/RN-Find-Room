import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

import postsReducer from "./reducers/posts";
import locationsReducer from "./reducers/locations";

const rootReducer = combineReducers({
  posts: postsReducer,
  locations: locationsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
