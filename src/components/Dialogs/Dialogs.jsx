import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/MessageItem";

const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = props.state.messages.map(m => <Messages message={m.message}/>);
    let newMessageElemt = React.createRef();
    let addMessage = () => {
        let message = newMessageElemt.current.value;
        alert(message);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.maesages}>
                {messages}
            </div>
            <div>
                <textarea ref={newMessageElemt}></textarea>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
}

export default Dialogs;