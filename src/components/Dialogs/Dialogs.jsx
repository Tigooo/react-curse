import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



const Dialogs = () => {
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

    let dialogs = dialogData.map( d =>  <DialogItem name={d.name} id={d.id}/>);
    let messages = messagesData.map( m => <Messages message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.maesages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;