import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDYZ-64hAFjQEjP5TZsoiGNZGUErYsHJHU",
    authDomain: "adbjj-store.firebaseapp.com",
    projectId: "adbjj-store",
    storageBucket: "adbjj-store.appspot.com",
    messagingSenderId: "475604161940",
    appId: "1:475604161940:web:729cf53c6d84255f43ab81",
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);