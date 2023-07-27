// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHtdAiP31cfXeE8rNY-n3M2ZV9rW1jb0o",
  authDomain: "social-media-app-e4b58.firebaseapp.com",
  projectId: "social-media-app-e4b58",
  storageBucket: "social-media-app-e4b58.appspot.com",
  messagingSenderId: "477294484990",
  appId: "1:477294484990:web:484f6c1f1ca6acb66074af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// getAuth function tell firebase that we're going to have authentication in our project
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);