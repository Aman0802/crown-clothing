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

firebase.initializeApp(config);

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    // console.log(newDocRef);
    batch.set(newDocRef, obj);
  });

  //fire the batch call/request. Returns us back a promise, if succeeds comes back and resolves a void value
  await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for google authetication utility
export const googleProvider = new firebase.auth.GoogleAuthProvider();
//we always wan't to trigger a Google popup whenever we use this googleAuth provider for signing in or up
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
