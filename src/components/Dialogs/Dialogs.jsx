import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
       <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               <div className={s.dialog + ' ' + s.active}>
                   <NavLink to='/dialogs/1'>Tigran</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to='/dialogs/2'>Pash</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to='/dialogs/3'>Tehmina</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to='/dialogs/4'>Sevak</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to='/dialogs/5'>Gor</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to='/dialogs/6'>Arev</NavLink>
               </div>
           </div>
           <div className={s.maesages}>
               <div className={s.message}>Hi</div>
               <div className={s.message}>How is your it-camasutra</div>
               <div className={s.message}>Yo</div>

           </div>
       </div>
    )
}

export default Dialogs;