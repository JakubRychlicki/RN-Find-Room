import firebase from "firebase";
import * as actionsTypes from "../constants";

export const loadPosts = (posts) => {
  return {
    type: actionsTypes.FETCH_POSTS,
    posts,
  };
};

export const loadImagesToPosts = (postId, images) => {
  return {
    type: actionsTypes.FETCH_IMAGES_TO_POSTS,
    postId,
    images,
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const postsRef = firebase.firestore().collection("posts");

    const posts_ = await postsRef.get().then((snapshot) => {
      let posts = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });

      dispatch(loadPosts(posts));
    });
  };
};

export const fetchImagesPosts = (postId) => {
  return async (dispatch, getState) => {
    const posts = getState().posts.posts;

    for (let i = 0; i < posts.length; i++) {
      let postImagesRef = firebase
        .firestore()
        .collection("posts")
        .doc(posts[i].id)
        .collection("images");

      const images_ = await postImagesRef.get().then((snapshot) => {
        let images = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        dispatch(loadImagesToPosts(posts[i].id, images));
      });
    }
  };
};
