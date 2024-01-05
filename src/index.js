import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwwr4HlCgdrcNrqXgclaWXACYy3g3fP40",
  authDomain: "tuts-blog.firebaseapp.com",
  projectId: "tuts-blog",
  storageBucket: "tuts-blog.appspot.com",
  messagingSenderId: "1056704482603",
  appId: "1:1056704482603:web:4821511c9a4536ce4e096e",
  measurementId: "G-JTGSQ5SJBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

createRoot(
  document.getElementById('root')).render(
  <App db={db} />
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App db={db}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
