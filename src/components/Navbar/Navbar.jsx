import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
    render (){
        return (
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Massages</NavLink>
                </div>
                <div className={s.item}>
                    <a herf="#">News</a>
                </div>
                <div className={s.item}>
                    <a href="#">Music</a>
                </div>
                <div className={s.item}>
                    <a href="#">Setings</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;