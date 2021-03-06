import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {Stateprovider} from './store/Stateprovider';
import{ Reducer,initialState }from './store/Reducer';
ReactDOM.render(
  <React.StrictMode>
  <Stateprovider initialState={initialState} reducer={Reducer}>
  <div className="App">
    <App />
    </div>
    </Stateprovider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
