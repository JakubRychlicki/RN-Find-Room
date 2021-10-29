import { CardStyleInterpolators } from "@react-navigation/stack";
import { AppStyles } from "../../constants/AppStyles";

export default defaultNavOptions = {
  headerStyle: {
    backgroundColor: AppStyles.color.primary,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
