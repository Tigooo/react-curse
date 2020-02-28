import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";

class MyPosts extends React.Component {
    render (){
        return (

                <div className={s.postBlock}>
                    my post
                    <div>
                        <textarea></textarea>
                        <button>Add post</button>
                    </div>
                    <div className={s.item}>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                    </div>
                </div>
        )
    }
}

export default MyPosts;