import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    //add yours
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);



// if (window.location.hostname === 'localhost') {
//   // auth.useEmulator('http://localhost:9099');
//   // db.useEmulator('localhost', '8080');
// }

export const authentication = getAuth(app);
export const db = getFirestore(app)
