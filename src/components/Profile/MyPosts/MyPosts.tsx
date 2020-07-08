import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type PropsType ={
    posts: Array<any>
}

const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    return <div className={s.myposts}>
        <div className={s.addpost}>
            <h4>My posts</h4>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;