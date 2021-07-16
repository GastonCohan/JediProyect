import firebase from "firebase/app";

import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCkB-GV2qkoyR7m5JY806-r6CAFOf9ZIcY",
    authDomain: "jediproyect.firebaseapp.com",
    projectId: "jediproyect",
    storageBucket: "jediproyect.appspot.com",
    messagingSenderId: "962467585488",
    appId: "1:962467585488:web:f49a6ae2baab5675206dd5",
    measurementId: "G-4X6JL6ZEL7"
};

const fb = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const db = fb.firestore();