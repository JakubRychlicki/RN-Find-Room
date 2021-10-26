import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";

import { Text_Roboto_Bold } from "../../../components/UI/Text";
import ListItemPost from "../../../components/rooms/ListItemPost";
import { AppStyles } from "../../../constants/AppStyles";
import { useSelector } from "react-redux";

const RoomsOverview = ({ navigation }) => {
  const posts = useSelector((state) => state.posts.filteredPosts);

  const selectItemHandler = (id) => {
    navigation.navigate("RoomDetail", {
      postId: id,
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={() => {
            return (
              <View style={styles.countPosts}>
                <Text_Roboto_Bold style={styles.countPostsText}>
                  Liczba ogłoszeń: {posts.length}
                </Text_Roboto_Bold>
              </View>
            );
          }}
          data={posts}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ListItemPost
                title={item.title}
                price={item.price}
                created_at={item.created_at}
                main_image={item.images[0]}
                go_to_details={() => selectItemHandler(item.id)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppStyles.color.grayBg,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  countPosts: {
    paddingVertical: 10,
  },
  countPostsText: {
    fontSize: 15,
    color: "black",
  },
});

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

export default RoomsOverview;
