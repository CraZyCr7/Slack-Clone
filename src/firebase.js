import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCP4Jp4rikq7OcRDuv9WaeIIcNHayzjHxU",
    authDomain: "slack-clone-701ba.firebaseapp.com",
    projectId: "slack-clone-701ba",
    storageBucket: "slack-clone-701ba.appspot.com",
    messagingSenderId: "235285845123",
    appId: "1:235285845123:web:cb8a00e3d93e291d95f7b6",
    measurementId: "G-9EE5FR0711"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;