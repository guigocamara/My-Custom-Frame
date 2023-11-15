import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBvuImOmZc-imfhQAs7CuwF8QQPXyBz_3o",

  authDomain: "mycustomframe-93aef.firebaseapp.com",

  databaseURL: "https://mycustomframe-93aef-default-rtdb.firebaseio.com",

  projectId: "mycustomframe-93aef",

  storageBucket: "mycustomframe-93aef.appspot.com",

  messagingSenderId: "318772604991",

  appId: "1:318772604991:web:983887767f4ba760dac88a",

  measurementId: "G-LZZYMDWV2V"
});


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
