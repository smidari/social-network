import React, {RefObject} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const MyPosts: React.FC<MyPostsType> = props => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        };
    };

    return <div className={s.myposts}>
        <div className={s.addpost}>
            <h4>My posts</h4>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;