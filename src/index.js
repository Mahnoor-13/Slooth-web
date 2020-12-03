import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import Signup from "./Signup";
import Routes from "./Routes";
import * as firebase from "firebase";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'react-notifications/lib/notifications.css';

var firebaseConfig = {
    // apiKey: "AIzaSyDAppKauvQf8zWYX2RH16DUjXupR7W3Yow",
    // authDomain: "attraction-6c456.firebaseapp.com",
    // databaseURL: "https://attraction-6c456.firebaseio.com",
    // projectId: "attraction-6c456",
    // storageBucket: "attraction-6c456.appspot.com",
    // messagingSenderId: "703890433565",
    // appId: "1:703890433565:web:eef91b6dcbe28b09"

    apiKey: "AIzaSyCT10HZ5mDIrMhQrXQbJnkVR3ZJEEm4pYg",
    authDomain: "sloothapp.firebaseapp.com",
    databaseURL: "https://sloothapp.firebaseio.com",
    projectId: "sloothapp",
    storageBucket: "sloothapp.appspot.com",
    messagingSenderId: "267405612148",
    appId: "1:267405612148:web:cc69e76f0b820248",
    measurementId: "G-8LV54VRC1L"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import React from "react";
// import ReactDOM from "react-dom";
// import Pdf from "react-to-pdf";

// import "./styles.css";
// const ref = React.createRef();

// class App extends React.Component {

//   render(){
//   return (
//     <div className="App">
//       <Pdf targetRef={ref} filename="code-example.pdf">
//         {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
//       </Pdf>
//       <div ref={ref}>
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     </div>
//   )
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
