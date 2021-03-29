import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAaqE6OftKL63t2vCOK9-0K9s1Rc5QnQCE",
  authDomain: "react-firebase-exe.firebaseapp.com",
  projectId: "react-firebase-exe",
  storageBucket: "react-firebase-exe.appspot.com",
  messagingSenderId: "523126606069",
  appId: "1:523126606069:web:feb5efa6b62a2eee779dbc"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore() //acesso ao banco de dados


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
