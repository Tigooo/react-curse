import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    let profilebza = () => <Profile posts={props.posts}/>;
    let dialogbaza = () => <Dialogs dialogData={props.dialogData} messagesData={props.messagesData}/>
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={dialogbaza}/>
                    <Route path='/profile' render={profilebza}/>
                    <Route path='/profile' render={profilebza}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
