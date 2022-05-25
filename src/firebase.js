import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0U_YOBhSx06QGwgXtutoVqDNsg_LM4ag",
  authDomain: "insta-clone-79cce.firebaseapp.com",
  projectId: "insta-clone-79cce",
  storageBucket: "insta-clone-79cce.appspot.com",
  messagingSenderId: "130647254943",
  appId: "1:130647254943:web:19e3cc625286491cd27faa",
  measurementId: "G-ZENXD01R9Y",
};

// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Use these for db & auth
export const db = getFirestore(firebaseApp);
// const auth = firebase.auth();
