// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYXjG7IaNL-VwcZkcIUcLVFmGFHWFqs3o",
  authDomain: "auth-945f2.firebaseapp.com",
  projectId: "auth-945f2",
  storageBucket: "auth-945f2.appspot.com",
  messagingSenderId: "142961326215",
  appId: "1:142961326215:web:db0a3efd95a838fad2e022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}