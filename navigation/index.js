import firebase from "firebase";
import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import StartupScreen from "../screens/StartupScreen";
import MainNavigator from "./main/MainNavigator";

import { useDispatch } from "react-redux";
import { loadPosts } from "../redux/actions/posts";

const AppNavigation = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    const postsRef = firebase.firestore().collection("posts");

    const posts = await postsRef.get().then((snapshot) => {
      let all_posts = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      dispatch(loadPosts(all_posts));
    });
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.24)" animated />
      {!isLoading ? <MainNavigator /> : <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigation;
