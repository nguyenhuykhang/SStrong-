import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDIFVpC3qZVOzgiMatKYAVztPD3RHlmSBE",
    authDomain: "mhacks-22493.firebaseapp.com",
    projectId: "mhacks-22493",
    storageBucket: "mhacks-22493.appspot.com",
    messagingSenderId: "208233282818",
    appId: "1:208233282818:web:be074369301831f144961b",
    measurementId: "G-H7C211N2CY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);



// if (window.location.hostname === 'localhost') {
//   // auth.useEmulator('http://localhost:9099');
//   // db.useEmulator('localhost', '8080');
// }

export const authentication = getAuth(app);
export const db = getFirestore(app)
