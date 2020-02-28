import React from "react";
import s from "./Header.module.css"

class Header extends React.Component {
    render (){
        return (
            <header className={s.header}>
                <img src="https://img.favpng.com/4/1/17/react-javascript-vue-js-logo-png-favpng-T97hHj5T2UsnURsbZ0PB5Mi3c.jpg" alt="logo"/>
            </header>
        )
    }
}

export default Header;