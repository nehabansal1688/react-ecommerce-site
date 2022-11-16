import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  googleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB3TksPjkcdLO1W6vkFHjZxYCOK7ZtFGiw',
  authDomain: 'crwn-clothing-db-neha.firebaseapp.com',
  projectId: 'crwn-clothing-db-neha',
  storageBucket: 'crwn-clothing-db-neha.appspot.com',
  messagingSenderId: '961323804083',
  appId: '1:961323804083:web:7269d61488694fde6217c6',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new googleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = gethAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
