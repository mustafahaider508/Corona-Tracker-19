import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEnho3z8AkwRZj64-pfb2Zp2DLKhuDUD8",
  authDomain: "coronatracker19-a6553.firebaseapp.com",
  projectId: "coronatracker19-a6553",
  storageBucket: "coronatracker19-a6553.appspot.com",
  messagingSenderId: "186328150548",
  appId: "1:186328150548:web:0c5e0c4480b6a1aa5eed01",
  measurementId: "G-DHCY9LNSEJ"
  });

  const db = firebaseApp.firestore();
  
  export {db};