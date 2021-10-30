import firebase from "firebase";
import React, { useEffect } from "react";

export default Logout = () => {
  useEffect(() => {
    async function logoutUser() {
      const logout = await firebase.auth().signOut();
    }

    logoutUser();
  }, []);

  return null;
};
