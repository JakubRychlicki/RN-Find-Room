import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import StartupScreen from "../screens/StartupScreen";
import MainNavigator from "./main/MainNavigator";

import { useDispatch } from "react-redux";
import { fetchPosts, fetchImagesPosts } from "../redux/actions/posts";

const AppNavigation = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    await dispatch(fetchPosts());
    await dispatch(fetchImagesPosts());
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
