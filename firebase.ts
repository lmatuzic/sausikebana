import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyCyaf_vxhQSZlnsHscTN35N6Z7Mf3UV8ek",
   authDomain: "sausikebana.firebaseapp.com",
   projectId: "sausikebana",
   storageBucket: "sausikebana.appspot.com",
   messagingSenderId: "264361160246",
   appId: "1:264361160246:web:5548e91fd5157ee4527297",
   measurementId: "G-QKFWHRN5RH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
