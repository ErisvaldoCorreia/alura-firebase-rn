// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyBZDQFfewyN6Lb_S28GFDQ3rHqc1sRWe7s',
  authDomain: 'alura-firebase-rn.firebaseapp.com',
  projectId: 'alura-firebase-rn',
  storageBucket: 'alura-firebase-rn.appspot.com',
  messagingSenderId: '718914062166',
  appId: '1:718914062166:web:80b1873a772602157f38f7',
  measurementId: 'G-624V54KQFK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
