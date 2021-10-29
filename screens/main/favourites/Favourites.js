import React from "react";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";
import ListTitlePosts from "../../../components/rooms/ListTitlePosts";
import ListItemPost from "../../../components/rooms/ListItemPost";
import EmptyList from "../../../components/rooms/EmptyList";
import ContainerPosts from "../../../components/rooms/ContainerPosts";

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
    <ContainerPosts>
      <FlatList
        data={favPosts}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return <ListTitlePosts title={`Obserwujesz(${favPosts.length})`} />;
        }}
        ListEmptyComponent={() => {
          return (
            <EmptyList message="Aktualnie nie obserwujesz żadnego ogłoszenia." />
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
    </ContainerPosts>
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

export default Favourites;
