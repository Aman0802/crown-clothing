//importing firebase utility
import firebase from "firebase/app";
//for database, will automatically be attacjed to the firebase keyword imported before
import "firebase/firestore";
//for authentication, will automatically be attacjed to the firebase keyword imported before
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBoO9rZT45-asu-aF5rP8gXpkg_bH5IMZ0",
  authDomain: "crown-db-169a7.firebaseapp.com",
  databaseURL: "https://crown-db-169a7.firebaseio.com",
  projectId: "crown-db-169a7",
  storageBucket: "crown-db-169a7.appspot.com",
  messagingSenderId: "973403265926",
  appId: "1:973403265926:web:d0fc4c38d99cb5625baa07",
  measurementId: "G-T0TBZ7833X",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //save in db only when we are signing in and not when we are signing out!
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating the user ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for google authetication utility
const provider = new firebase.auth.GoogleAuthProvider();
//we always wan't to trigger a Google popup whenever we use this googleAuth provider for signing in or up
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
