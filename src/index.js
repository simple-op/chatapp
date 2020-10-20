import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDMcpn_CpuFVMKGCj5_lTTGOGUHZEHsn4k",
  authDomain: "cart-e400a.firebaseapp.com",
  databaseURL: "https://cart-e400a.firebaseio.com",
  projectId: "cart-e400a",
  storageBucket: "cart-e400a.appspot.com",
  messagingSenderId: "202602848158",
  appId: "1:202602848158:web:8a64a92fa53b7ee7f4c08f"
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
