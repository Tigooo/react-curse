import React from "react";
import s from "./Nav.module.css"

class Nav extends React.Component {
    render (){
        return (
            <nav className={s.nav}>
                <div className={s.item}>
                    <a href="#">Profile</a>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <a href="#">Massages</a>
                </div>
                <div className={s.item}>
                    <a href="#">News</a>
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

export default Nav;