import React from "react";
import * as firebase from 'firebase'

// Get the Firebase config from the auto generated file.
const firebaseConfig = {
    apiKey: "AIzaSyB6bQk1TDpCH3ylmFL3HHbqMjqMapiLZpU",
    authDomain: "test-c5a03.firebaseapp.com",
    databaseURL: "https://test-c5a03.firebaseio.com",
    projectId: "test-c5a03",
    storageBucket: "test-c5a03.appspot.com",
    messagingSenderId: "919585579120"
}

// Instantiate a Firebase app. 
export default firebase.initializeApp(firebaseConfig);


