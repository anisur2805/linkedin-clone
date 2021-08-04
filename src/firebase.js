import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_mdT0MXp-JR0_PP8UX49px40qqY26xb0",
  authDomain: "linkedin-clone-2004f.firebaseapp.com",
  projectId: "linkedin-clone-2004f",
  storageBucket: "linkedin-clone-2004f.appspot.com",
  messagingSenderId: "216870651635",
  appId: "1:216870651635:web:b1a69a566f866dba731986",
  measurementId: "G-VSDJBLBXBG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}