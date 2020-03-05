import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Frends from "./Frends/Frends";

const Navbar = (props) => {
    let friends = props.state.friends.map(f => <Frends frend={f.user} ava={f.ava}/>)
        return (
            <div>
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
                    <h1>Friends</h1>
                    <div className={s.frined}>
                        {friends}
                    </div>
                </nav>

            </div>

        )
}

export default Navbar;