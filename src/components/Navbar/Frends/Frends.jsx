import React from "react";
import s from "./Frends.module.css"

const Frends = (props) => {
    let ava = props.ava;
    return (
       <div className={s.frined_block}>
           <img src={ava} alt=""/>
           {props.frend}

       </div>
    )
}

export default Frends;