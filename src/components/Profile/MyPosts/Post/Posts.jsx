import React from "react";
import s from "./Posts.module.css"

class Posts extends React.Component {
    render() {
        return (
            <div className={s.item}>
                <img
                    src="https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png"
                    alt="fdfdfdg"/>
                post 1
            </div>
        )
    }
}

export default Posts;