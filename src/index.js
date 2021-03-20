import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
    {id:1, name: 'dmitry'},
    {id:2, name: 'vaider'},
    {id:3, name: 'alex'}
]
let messages = [
    {id:1, message: 'hi'},
    {id:2, message: 'how are you'},
    {id:3, message: 'yo'}
]
let posts = [
    {id: 1, name: 'eliza', comment: 'lorem'},
    {id: 1, name: 'cool', comment: 'response-ability!'}
]



ReactDOM.render(
  <React.StrictMode>
    <App   posts={posts}     dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
