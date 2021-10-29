import React from "react";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";

import PostsTitle from "../../../components/rooms/PostsTitle";
import PostItem from "../../../components/rooms/PostItem";
import EmptyList from "../../../components/rooms/EmptyList";
import ContainerPosts from "../../../components/rooms/ContainerPosts";

import { useSelector, useDispatch } from "react-redux";
import { addPostToFav, removePostFromFav } from "../../../redux/actions/posts";

const RoomsOverview = ({ navigation }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.filteredPosts);
  const favPosts = useSelector((state) => state.posts.favPosts);

  const selectItemHandler = (id) => {
    navigation.navigate("RoomDetail", {
      postId: id,
    });
  };

  return (
    <ContainerPosts>
      <FlatList
        ListHeaderComponent={() => {
          return <PostsTitle title={`Liczba ogłoszeń: ${posts.length}`} />;
        }}
        ListEmptyComponent={() => {
          return <EmptyList message="Nie znaleziono żadnego ogłoszenia." />;
        }}
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <PostItem
              title={item.title}
              price={item.price}
              created_at={item.created_at}
              main_image={item.images[0]}
              go_to_details={() => selectItemHandler(item.id)}
              isFav={favPosts.some((e) => e.id == item.id)}
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

export default RoomsOverview;
