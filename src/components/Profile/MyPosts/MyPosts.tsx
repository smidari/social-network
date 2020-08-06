import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/store";

type MyPostsType = {
    posts: Array<PostType>
    dispatch?: (action: ActionsType) => void
    newPostText: string
    addPost: any
    updateNewPost: any
}


const MyPosts: React.FC<MyPostsType> = props => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let onAddPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    };
    let onPostChange = () => {
        // @ts-ignore
        let text = newPostElement.current.value;
        props.updateNewPost(text)
    };

    return <div className={s.myposts}>
        <div className={s.addpost}>
            <h4>My posts</h4>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;