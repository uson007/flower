import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChGUUe5IxD2WKWQCZClmH05HZXw4xxNME",
  authDomain: "flower-shop-93244.firebaseapp.com",
  projectId: "flower-shop-93244",
  storageBucket: "flower-shop-93244.appspot.com",
  messagingSenderId: "12318972549",
  appId: "1:12318972549:web:2cbb91f48207ea557867ec",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;
