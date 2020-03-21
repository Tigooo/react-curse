import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    debugger;
    return (

        <div>
            <ProfileInfo/>

            <MyPosts posts={props.state.posts} inputText={props.state.inputText.inputT} addPost={props.addPost} chahgeInnerText={props.chahgeInnerText}/>
        </div>
    )
}

export default Profile;