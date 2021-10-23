import firebase from "firebase";
import React, { useEffect } from "react";

export default Logout = () => {
  useEffect(() => {
    const logout = firebase.auth().signOut();

    return logout;
  }, []);

  return null;
};
