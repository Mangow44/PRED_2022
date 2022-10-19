import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC44qCOb5_91swZcidTiFB_XfyzHDDfqBQ",
  authDomain: "pred2022-7fc8b.firebaseapp.com",
  projectId: "pred2022-7fc8b",
  storageBucket: "pred2022-7fc8b.appspot.com",
  messagingSenderId: "319127767449",
  appId: "1:319127767449:web:06693662c86ffc860eeb08"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
getAuth(app);
export {
  db as d
};
