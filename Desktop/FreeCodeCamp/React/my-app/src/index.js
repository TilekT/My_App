import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyNew() {
  return (    
    <div>
      <h1>My name is Tilek</h1>
      <p>Here starts some text and than I type some additional text </p>
      <ul>
        <li>test 10000</li>
        <li>test 250</li>
        <li>some new info here</li>
      </ul>
    </div>)
}

ReactDOM.render(<MyNew />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
