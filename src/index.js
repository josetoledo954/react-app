import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyACuYeIyCOG4ne1e1gKu-r8wtQU3FPoID0",
  apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: "react-app-43b67.firebaseapp.com",
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: "react-app-43b67",
  projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: "react-app-43b67.appspot.com",
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: "1085698037953",
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: "1:1085698037953:web:56ae05124e0514dbd59c40"
  appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
