import React from "react";
import { StyleSheet, View, FlatList, Text, ScrollView } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";
import ListItem from "../../../components/rooms/ListItem";

import { useSelector } from "react-redux";
import { AppStyles, grays } from "../../../constants/AppStyles";

const RoomsOverview = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <View style={styles.screen}>
      <View style={styles.countPosts}>
        <Text style={styles.countPostsText}>
          Liczba ogłoszeń: {posts.length}
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                price={item.price}
                created_at={item.created_at}
                main_image={item.images[0].downloadURL}
              />
            );
          }}
        />
      </View>
    </View>
  );
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppStyles.color.grayBg,
  },
  countPosts: {
    padding: 10,
  },
  countPostsText: {
    fontSize: 15,
    fontWeight: "bold",
    color: grays.gray900,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoomsOverview;
