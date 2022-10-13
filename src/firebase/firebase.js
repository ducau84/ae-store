import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDsm35lYEMO1whZZGfEaAojkhcJZ3ZkicM",
  authDomain: "ae-store-2022.firebaseapp.com",
  projectId: "ae-store-2022",
  storageBucket: "ae-store-2022.appspot.com",
  messagingSenderId: "1092117318461",
  appId: "1:1092117318461:web:a8756460bc808c914a9354"
};

const app = initializeApp( firebaseConfig );
export const db = getFirestore( app );