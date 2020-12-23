import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
//axios can call api to get data:
//axios.get('http://rem-rest-api.herokuapp.com/api/users') //because of APi so link have to be linked with http://rem-rest-api.herokuapp.com/api
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

axios.defaults.withCredentials=true;
axios.defaults.baseURL='http://rem-rest-api.herokuapp.com/api';

const store = createStore(reducers);



ReactDOM.render(
  <Provider store = {store}><App /></Provider>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();