import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NavBar from './Componentes/ResponsiveNavigationBar';
import App from './App';
import MainComponents from './Componentes/MainComponent/MainComponent';
ReactDOM.render((<App/>) , document.getElementById('root'));
ReactDOM.render((<MainComponents/>) , document.getElementById('main'));
ReactDOM.render((<NavBar/>) , document.getElementById('navbar'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


