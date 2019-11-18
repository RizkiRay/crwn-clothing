import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXxbaa83f0Ej4GlH-VZVQwFw36Vmvc1lc",
    authDomain: "crwn-db-84e1c.firebaseapp.com",
    databaseURL: "https://crwn-db-84e1c.firebaseio.com",
    projectId: "crwn-db-84e1c",
    storageBucket: "crwn-db-84e1c.appspot.com",
    messagingSenderId: "597987058934",
    appId: "1:597987058934:web:959f3ae21dc2c0952c78d7",
    measurementId: "G-WZT7BQ44GZ"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;