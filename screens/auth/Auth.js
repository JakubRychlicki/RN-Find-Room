import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

import { AppStyles } from "../../constants/AppStyles";

import LoginScreen from "./Login";
import RegisterScreen from "./Register";

const Tab = createMaterialTopTabNavigator();

export const AuthTabNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: AppStyles.color.indicatorNavTopBg,
          },
          labelStyle: {
            color: AppStyles.color.title,
            fontFamily: AppStyles.fontFamily.bold,
          },
          style: {
            elevation: 0,
            marginTop: 20,
            width: AppStyles.textInputWidth.main,
            alignSelf: "center",
          },
        }}
      >
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{ tabBarLabel: "Zaloguj się" }}
        />
        <Tab.Screen
          name="Register"
          component={RegisterScreen}
          options={{ tabBarLabel: "Załóż konto" }}
        />
      </Tab.Navigator>
    </View>
  );
};

const Auth = () => {
  return <AuthTabNavigator />;
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default Auth;
