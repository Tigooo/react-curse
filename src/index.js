import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Posts from "./components/Profile/MyPosts/Post/Posts";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Messages from "./components/Dialogs/Message/MessageItem";


let posts = [
    {id: 1, message: "Hello how are you", likesCount: 11},
    {id: 1, message: "Barev aper", likesCount: 25},
    {id: 1, message: "Barev aper", likesCount: 55}
];




let dialogData = [
    {id: 1, name: 'Tigo'},
    {id: 2, name: 'Pash'},
    {id: 3, name: 'Tehmina'},
    {id: 4, name: 'Sevak'},
    {id: 5, name: 'Gor'},
    {id: 6, name: 'Arev'}
];
let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-camasutra'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
];


ReactDOM.render(<App posts={posts} dialogData={dialogData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
