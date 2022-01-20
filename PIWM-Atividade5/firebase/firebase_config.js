import firebase from 'firebase/compat/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnP9oE8qOVVGG0O4tY3vW3UsON8sTHMfY",
  authDomain: "piwm-firebase-atv05.firebaseapp.com",
  projectId: "piwm-firebase-atv05",
  storageBucket: "piwm-firebase-atv05.appspot.com",
  messagingSenderId: "758013163828",
  appId: "1:758013163828:web:cb401df03aa959d4bc8d61"
};

firebase.initializeApp(firebaseConfig)

const db = getFirestore()

export default { firebase, db }