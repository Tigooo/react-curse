import React from "react";
import s from "./ProfileInfo.module.css"

class ProfileInfo extends React.Component {
    render (){
        return (
            <div>
                <div>
                    <img src="./../../img/bg.jpg" alt=""/>
                </div>
                <div className={s["ava-line"]}>
                    <div>
                        <img src="./../../img/ava.jpg" alt=""/>
                    </div>
                    <div>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;