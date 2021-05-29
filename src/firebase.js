import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAsJtJwdfbTfbzmllwsWh_qMlQLy1rHaFI",
  authDomain: "tesla-clone-839d5.firebaseapp.com",
  projectId: "tesla-clone-839d5",
  storageBucket: "tesla-clone-839d5.appspot.com",
  messagingSenderId: "752988367883",
  appId: "1:752988367883:web:607fd19a8f96b2eba2ab0e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
export { auth };
