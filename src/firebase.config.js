import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNvq6_6PNdyZYhgxpFdPd6ZO8ufEFhI30",
  authDomain: "media-com-feaa9.firebaseapp.com",
  projectId: "media-com-feaa9",
  storageBucket: "media-com-feaa9.appspot.com",
  messagingSenderId: "489512348076",
  appId: "1:489512348076:web:38f13586f76df279cb7209"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()