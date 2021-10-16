import React, { useState } from "react";
import Constants from "expo-constants";
import firebase from "firebase/app";

if (firebase.apps.length == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

import { Provider } from "react-redux";
import { store } from "./redux";

import Navigation from "./navigation";

import AppLoading from "expo-app-loading";
import fetchFonts from "./services/utils/fetchFonts";

export default App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={() => {}}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
