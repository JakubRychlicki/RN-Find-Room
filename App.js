import React from "react";

import Constants from "expo-constants";
import firebase from "firebase/app";

if (firebase.apps.length == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

import { Provider } from "react-redux";
import { store } from "./redux";

import Navigation from "./navigation";

export default App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
