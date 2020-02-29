import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

class Profile extends React.Component {
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
               <MyPosts/>
            </div>
        )
    }
}

export default Profile;