import Moment from "moment";
import "moment/locale/pl";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title } from "react-native-paper";

import { AppStyles } from "../../constants/AppStyles";

const ListItem = (props) => {
  const { title, price, created_at, main_image } = props;
  const formatDate = Moment(new Date(created_at.toDate())).format("LL");

  return (
    <Card style={styles.cardContainer}>
      <Card.Content>
        <Card.Cover style={styles.image} source={{ uri: main_image }} />
        <Title numberOfLines={2} style={styles.title}>
          {title}
        </Title>
        <View style={styles.subInformationContainer}>
          <Text style={styles.price}>{price} zł</Text>
          <Text style={styles.date}>{formatDate}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  cardContainer: {
    height: 320,
    elevation: 2,
    width: AppStyles.cardWidth.main,
    marginVertical: 10,
    borderBottomLeftRadius: 20,
  },
  image: {
    height: 180,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    paddingBottom: 10,
  },
  subInformationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    color: AppStyles.color.priceText,
    fontSize: 22,
  },
  date: {
    color: AppStyles.color.dateText,
    fontSize: 12,
    alignSelf: "flex-end",
  },
});
