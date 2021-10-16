import * as Font from "expo-font";

export default fetchFonts = () => {
  return Font.loadAsync({
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });
};
