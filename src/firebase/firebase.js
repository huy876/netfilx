import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBthgcz__EYk4J0M0RmQI5Y1b6c40Jik8k",
    authDomain: "netflix-8514d.firebaseapp.com",
    databaseURL: "https://netflix-8514d.firebaseio.com",
    projectId: "netflix-8514d",
    storageBucket: "netflix-8514d.appspot.com",
    messagingSenderId: "30082471371",
    appId: "1:30082471371:web:a933755f5d81175d4b124e"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, GoogleAuthProvider, database as default}