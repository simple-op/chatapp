import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDkBHjojHP4SOyeJPToP16U1_G5xHE4Abo",
    authDomain: "cart-99523.firebaseapp.com",
    databaseURL: "https://cart-99523.firebaseio.com",
    projectId: "cart-99523",
    storageBucket: "cart-99523.appspot.com",
    messagingSenderId: "160819604622",
    appId: "1:160819604622:web:16d374e4b14a84010f6ddf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
