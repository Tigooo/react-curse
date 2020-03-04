import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/MessageItem";

const Dialogs = (props) => {

    let dialogs = props.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = props.messagesData.map(m => <Messages message={m.message}/>);
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