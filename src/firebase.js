import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATOr6J5087GIWq6fELWVQmrxHwRn5wFvk",
    authDomain: "facebook-messanger-clone-af99f.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-af99f.firebaseio.com",
    projectId: "facebook-messanger-clone-af99f",
    storageBucket: "facebook-messanger-clone-af99f.appspot.com",
    messagingSenderId: "408721949223",
    appId: "1:408721949223:web:7df52f5e213874692d0402",
    measurementId: "G-NE8MJBVBFV"
});

const db = firebaseApp.firestore();

export default db;