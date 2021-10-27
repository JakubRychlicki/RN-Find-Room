import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Text_Roboto_Bold } from "../../../components/UI/Text";
import { AppStyles } from "../../../constants/AppStyles";
import HeaderButton from "../../../components/UI/HeaderButton";
import ListItemPost from "../../../components/rooms/ListItemPost";

import { useSelector, useDispatch } from "react-redux";
import { addPostToFav, removePostFromFav } from "../../../redux/actions/posts";

const Favourites = ({ navigation }) => {
  const dispatch = useDispatch();
  const favPosts = useSelector((state) => state.posts.favPosts);

  const selectItemHandler = (id) => {
    navigation.navigate("RoomDetail", {
      postId: id,
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={favPosts}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <View style={styles.countPosts}>
                <Text_Roboto_Bold style={styles.countPostsText}>
                  Obserwujesz({favPosts.length})
                </Text_Roboto_Bold>
              </View>
            );
          }}
          renderItem={({ item }) => {
            return (
              <ListItemPost
                title={item.title}
                price={item.price}
                created_at={item.created_at}
                main_image={item.images[0]}
                go_to_details={() => selectItemHandler(item.id)}
                isFav={true}
                addToFav={() => dispatch(addPostToFav(item.id))}
                removeFromFav={() => dispatch(removePostFromFav(item.id))}
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
    fontSize: 18,
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

export default Favourites;
