import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Posts massage={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={s.postBlock}>
            <h3> My post</h3>
            <div>
                <textarea className={s.textarea} ref={newPostElement} ></textarea>
                <button className={s.button} onClick={addPost}>Add post</button>
            </div>
            <div className={s.item}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;