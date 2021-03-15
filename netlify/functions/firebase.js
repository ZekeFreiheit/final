const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {  apiKey: "AIzaSyCscvXxRwy0OqjqSKsGq5hYlYn4FLVypac",
authDomain: "final-bespoken.firebaseapp.com",
projectId: "final-bespoken",
storageBucket: "final-bespoken.appspot.com",
messagingSenderId: "483312461357",
appId: "1:483312461357:web:0b5bc984585beb167cfaa4"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase