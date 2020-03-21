import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    let profilebza = () => <Profile state={props.state.profilePage} addPost={props.addPost} chahgeInnerText={props.chahgeInnerText}/>;
    let dialogbaza = () => <Dialogs state={props.state.dialogpage}/>
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.navbar}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={dialogbaza}/>
                    <Route path='/profile' render={profilebza}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
