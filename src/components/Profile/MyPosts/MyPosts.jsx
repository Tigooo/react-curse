import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Posts massage={p.message} likesCount={p.likesCount}/>);
    return (
        <div className={s.postBlock}>
            <h3> My post</h3>
            <div>
                <textarea className={s.textarea}></textarea>
                <button className={s.button}>Add post</button>
            </div>
            <div className={s.item}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;