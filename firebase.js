// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8L-HfEsNxWv2KEYYZGaJ3HvDssy96qaM",
  authDomain: "ins-clone-432da.firebaseapp.com",
  projectId: "ins-clone-432da",
  storageBucket: "ins-clone-432da.appspot.com",
  messagingSenderId: "321844220210",
  appId: "1:321844220210:web:bd97c713c124e606e7c72b",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
