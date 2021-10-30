import React from "react";
import { FlatList } from "react-native";

import PostsTitle from "../../../components/rooms/PostsTitle";
import PostItem from "../../../components/rooms/PostItem";
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
          return <PostsTitle title={`Obserwujesz(${favPosts.length})`} />;
        }}
        ListEmptyComponent={() => {
          return (
            <EmptyList message="Aktualnie nie obserwujesz żadnego ogłoszenia." />
          );
        }}
        renderItem={({ item }) => {
          return (
            <PostItem
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

export default Favourites;
