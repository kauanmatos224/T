import firebase from "firebase/app";
import "firebase/firestore";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBaEQpOY2f17g8bc7Kjto4R9yY32MCc_4c",
    authDomain: "thoth-invoice.firebaseapp.com",
    projectId: "thoth-invoice",
    storageBucket: "thoth-invoice.appspot.com",
    messagingSenderId: "621489432520",
    appId: "1:621489432520:web:c2ffb0789a795a3ab302fd"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();