import React from "react";
import { StyleSheet, View } from "react-native";
import { Text_Roboto, Text_Roboto_Medium, Text_Roboto_Bold } from "../UI/Text";
import { AppStyles } from "../../constants/AppStyles";

import formatDate from "../../services/utils/formatDate";

export default PostInfo = (props) => {
  return (
    <View>
      <Text_Roboto_Medium style={styles.date}>
        {formatDate(props.created_at)}
      </Text_Roboto_Medium>
      <View style={styles.container}>
        <Text_Roboto_Medium style={styles.title}>
          {props.title}
        </Text_Roboto_Medium>
        <Text_Roboto style={styles.priceTitle}>
          Cena:
          <Text_Roboto_Bold style={styles.price}>
            {" "}
            {props.price} zł
          </Text_Roboto_Bold>
        </Text_Roboto>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    color: AppStyles.color.date,
    fontSize: AppStyles.fontSize.date,
    paddingLeft: 10,
    paddingTop: 10,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    paddingBottom: 10,
  },
  priceTitle: {
    color: AppStyles.color.price,
    fontSize: AppStyles.fontSize.price,
  },
  price: {
    color: AppStyles.color.price,
    fontSize: AppStyles.fontSize.price,
  },
});
