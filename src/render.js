import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, chahgeInnerText} from "./redux/state";


export let RerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} chahgeInnerText={chahgeInnerText} addPost={addPost}/>, document.getElementById('root'));
};