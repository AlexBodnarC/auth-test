import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDThl93HmSmwnnn7edqaSKAK0pPi4W3Q1s",
  authDomain: "education-test-34f28.firebaseapp.com",
  databaseURL: "https://education-test-34f28-default-rtdb.firebaseio.com",
  projectId: "education-test-34f28",
  storageBucket: "education-test-34f28.appspot.com",
  messagingSenderId: "385006483516",
  appId: "1:385006483516:web:a4b53ae1e722c01b19eb39"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};