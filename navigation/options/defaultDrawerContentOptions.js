import { StatusBar } from "react-native";
import { AppStyles } from "../../constants/AppStyles";

export default defaultDrawerContentOptions = {
  inactiveTintColor: AppStyles.color.labelDrawerColor,
  activeTintColor: AppStyles.color.labelDrawerColor,
  activeBackgroundColor: AppStyles.color.activeDrawerBg,
  contentContainerStyle: {
    paddingTop: StatusBar.currentHeight,
  },
  itemStyle: {
    width: "100%",
    alignSelf: "center",
    borderRadius: 0,
    marginVertical: 0,
  },
  labelStyle: {
    fontFamily: AppStyles.fontFamily.medium,
    fontSize: 16,
  },
};
