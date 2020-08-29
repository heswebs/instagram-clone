import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCi_hTXGwMRgRmqtDiCFPUggxLPeJ8seLg",
    authDomain: "instagram-clone-react-9fc1c.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-9fc1c.firebaseio.com",
    projectId: "instagram-clone-react-9fc1c",
    storageBucket: "instagram-clone-react-9fc1c.appspot.com",
    messagingSenderId: "87476720231",
    appId: "1:87476720231:web:65dca6a7adc557e76abac2",
    measurementId: "G-5TRJZN9JS8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

export {db, auth, storage};