import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import 'jquery';
import 'popper.js';


let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;


let clock = setInterval(function () {
  count1++;

  if (count1 === 10){
    count2 ++;
    count1 =0;
  }
  if (count2 === 6){
    count3 ++;
    count2 = 0;
  }
  if (count3 === 10){
    count4 ++;
    count3 = 0;
  }
  if (count4 === 6){
    count5++;
    count4 = 0;
  }
  if (count5 === 10){
    count6++;

  }

  if (count6 === 10){
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;
    count6 = 0;
  }




  ReactDOM.render(
    <React.StrictMode>
      <App seconds01={count1} seconds02={count2} minutes01={count3} minutes02={count4} hours01={count5} hours02={count6} />
    </React.StrictMode>,
    document.getElementById('root')
  );



}, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
