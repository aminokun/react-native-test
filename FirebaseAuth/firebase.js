// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADMFSZCGmUM_ZIsssY6IxNjFt8ght3mew",
  authDomain: "fir-auth-a1145.firebaseapp.com",
  projectId: "fir-auth-a1145",
  storageBucket: "fir-auth-a1145.appspot.com",
  messagingSenderId: "468075464013",
  appId: "1:468075464013:web:dec68200f7f1db1cc16304"
};

// Initialize Firebase
let app;

if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth
export { auth };