// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp3gtofv1ZiTv527U0g0H5mmLpZNrYJPA",
  authDomain: "swift-parcel-7b99a.firebaseapp.com",
  projectId: "swift-parcel-7b99a",
  storageBucket: "swift-parcel-7b99a.appspot.com",
  messagingSenderId: "1084378913488",
  appId: "1:1084378913488:web:c3e94a25e4a35ea06adcd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);