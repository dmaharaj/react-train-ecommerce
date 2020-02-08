import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwrqQjKCnAG__XCp3rdZ3npTlyPvtWz5A",
    authDomain: "crwn-clothing-db-a2753.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-a2753.firebaseio.com",
    projectId: "crwn-clothing-db-a2753",
    storageBucket: "crwn-clothing-db-a2753.appspot.com",
    messagingSenderId: "394120644763",
    appId: "1:394120644763:web:5bb04f0d7fb316a2929e3e",
    measurementId: "G-01FSS94J3F"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;