import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import NavBar from './Componentes/NavigationBar/ResponsiveNavigationBar';
import Axios from 'axios';
ReactDOM.render((<App/>) , document.getElementById('root'));
ReactDOM.render((<NavBar/>) , document.getElementById('navbar'));

Axios.defaults.baseURL = "https://api.github.com/repos";


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


