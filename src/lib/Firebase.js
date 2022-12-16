import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA_vVcf4gBRxCKeHY7HbQ6qahN9Ddwfmck",
    authDomain: "instagram-clone-6ad99.firebaseapp.com",
    projectId: "instagram-clone-6ad99",
    storageBucket: "instagram-clone-6ad99.appspot.com",
    messagingSenderId: "997958741243",
    appId: "1:997958741243:web:67cd797a289b926f4b145e",
    measurementId: "G-S7MP9NW05F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const {FieldValue} = firebase.firestore;
  const auth = firebase.auth()

  export {firebaseApp, FieldValue, auth};