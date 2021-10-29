import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Text_Roboto_Bold, Text_Roboto_Medium } from "../UI/Text";
import IconButton from "../UI/IconButton";

import formatDate from "../../services/utils/formatDate";
import { AppStyles } from "../../constants/AppStyles";

const PostItem = (props) => {
  const {
    title,
    price,
    created_at,
    main_image,
    go_to_details,
    isFav,
    addToFav,
    removeFromFav,
  } = props;

  return (
    <TouchableOpacity onPress={go_to_details}>
      <Card style={styles.cardContainer}>
        <Card.Content>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: main_image }} />
            <View style={styles.followContainer}>
              {isFav ? (
                <IconButton
                  name="md-heart"
                  size={38}
                  color={AppStyles.color.iconFavColor}
                  onTouch={removeFromFav}
                />
              ) : (
                <IconButton
                  name="md-heart-outline"
                  size={38}
                  color={AppStyles.color.iconFavColor}
                  onTouch={addToFav}
                />
              )}
            </View>
          </View>
          <Text_Roboto_Medium numberOfLines={2} style={styles.title}>
            {title}
          </Text_Roboto_Medium>
          <View style={styles.subInformationContainer}>
            <Text_Roboto_Bold style={styles.price}>{price} zł</Text_Roboto_Bold>
            <Text_Roboto_Medium style={styles.date}>
              {formatDate(created_at)}
            </Text_Roboto_Medium>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 310,
    elevation: 2,
    width: AppStyles.cardWidth.main,
    marginVertical: 10,
    borderBottomLeftRadius: 20,
  },
  imageContainer: {
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  followContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 50,
    width: 50,
    backgroundColor: AppStyles.color.primary,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    paddingVertical: 10,
  },
  subInformationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    color: AppStyles.color.price,
    fontSize: AppStyles.fontSize.price,
  },
  date: {
    color: AppStyles.color.date,
    fontSize: AppStyles.fontSize.date,
    alignSelf: "flex-end",
  },
});

export default PostItem;
