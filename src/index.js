import React from 'react';
import "./whdr"
import ReactDOM from 'react-dom/client';
import './index.css';
import FirebaseContext from "./context/FirebaseContext";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-loading-skeleton/dist/skeleton.css";
import {BrowserRouter} from "react-router-dom"
import {FieldValue, firebaseApp} from "./lib/Firebase"
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{firebaseApp, FieldValue}}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FirebaseContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
