import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFyqX0P_bdLhs_bY_amvR57zB7ZZvPHJk",
  authDomain: "todo-app-97888.firebaseapp.com",
  projectId: "todo-app-97888",
  storageBucket: "todo-app-97888.appspot.com",
  messagingSenderId: "1045488438935",
  appId: "1:1045488438935:web:3d972068ffae8d4687e3d2",
  measurementId: "G-CYLZZKDZZY",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
