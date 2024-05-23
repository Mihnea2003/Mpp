"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIREBASE_AUTH = void 0;
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var auth_1 = require("firebase/auth");
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAvv4VakXmgT7L4T-Ohk5FBTSB8TqnZoK8",
    authDomain: "mpp-cred.firebaseapp.com",
    projectId: "mpp-cred",
    storageBucket: "mpp-cred.appspot.com",
    messagingSenderId: "492841853880",
    appId: "1:492841853880:web:9ba3954be6f89f08bb654d",
    measurementId: "G-F86NSMY5YY"
};
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
exports.FIREBASE_AUTH = (0, auth_1.getAuth)(app);
// Initialize Cloud Firestore and get a reference to the service
var db = (0, firestore_1.getFirestore)(app);
// Export the Firestore database instance
exports.default = db;
