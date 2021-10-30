import React from "react";
import { Divider } from "react-native-paper";
import { AppStyles } from "../../constants/AppStyles";

const Separator = () => {
  return <Divider style={{ backgroundColor: AppStyles.color.dividerColor }} />;
};

export default Separator;
