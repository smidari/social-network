import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import {ActionType, PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    dispatch: (action: ActionType) => void
    newPostText: string
}


const MyPosts: React.FC<MyPostsType> = props => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator());
        }
    };

    let onPostChange = () => {
        // @ts-ignore
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    };

    return <div className={s.myposts}>
        <div className={s.addpost}>
            <h4>My posts</h4>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};

export default MyPosts;