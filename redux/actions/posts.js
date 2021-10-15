import firebase from "firebase";
import * as actionsTypes from "../constants";

export const loadPosts = (posts) => {
  return {
    type: actionsTypes.FETCH_POSTS,
    posts,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then((snapshot) => {
        let posts = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        dispatch(loadPosts(posts));
      });
  };
};
