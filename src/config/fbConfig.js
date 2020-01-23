import "firebase/firestore";
import "firebase/auth";
import 'firebase/database';

var firebase = require("firebase/app");

var firebaseConfig = {
    apiKey: "AIzaSyC_a75ChUeJsd8UY3yMj_O-go61kIQqyY0",
    authDomain: "socialnetwork-4801f.firebaseapp.com",
    databaseURL: "https://socialnetwork-4801f.firebaseio.com",
    projectId: "socialnetwork-4801f",
    storageBucket: "socialnetwork-4801f.appspot.com",
    messagingSenderId: "866493637925",
    appId: "1:866493637925:web:5fc1261d7ec38e3fe4e6cc",
    measurementId: "G-Y57QVTZ3VX",
    userProfile: 'users'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({})

export {firebase, firebaseConfig};