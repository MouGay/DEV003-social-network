// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// importa para traer firestore
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBqbUXDKO_7F17P6rnD__uWg4PorxgCCFs',
  authDomain: 'ciberfem-d9876.firebaseapp.com',
  projectId: 'ciberfem-d9876',
  storageBucket: 'ciberfem-d9876.appspot.com',
  messagingSenderId: '320193355065',
  appId: '1:320193355065:web:acf8a48aa72297efbcdce8',
  measurementId: 'G-VFL2E3VKX5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
// conexion a la base de datos que se importa más arriba
export const db = getFirestore(app);
