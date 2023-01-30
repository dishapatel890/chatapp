import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider} from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCFZrTdtt11iWtENHFiNsbTL9blFlWqYAQ",
//   authDomain: "react-chat-app-67c44.firebaseapp.com",
//   databaseURL: "https://react-chat-app-67c44-default-rtdb.firebaseio.com",
//   projectId: "react-chat-app-67c44",
//   storageBucket: "react-chat-app-67c44.appspot.com",
//   messagingSenderId: "823347198566",
//   appId: "1:823347198566:web:5380d7355b3724daf50ba7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <ChatContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ChatContextProvider>
    </AuthContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


