
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOmNL33egCdnqzGgufNdnaHbDes5EEX3w",
  authDomain: "robertoblog-60969.firebaseapp.com",
  projectId: "robertoblog-60969",
  storageBucket: "robertoblog-60969.appspot.com",
  messagingSenderId: "781731988869",
  appId: "1:781731988869:web:896c3ac843d2b64e3030ec"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);