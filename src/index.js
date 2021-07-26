import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//버전업이 되면서 여러개의 Component를 넣을 수 있게 됨 (App, Potato)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Component : HTML 을 반환하는 함수.
//JSX : Javascript 내의 html (REACT만의 개념)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
