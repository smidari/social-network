import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reduser";

type MyPostsType = {
    store: any
}

const MyPostsContainer: React.FC<MyPostsType> = props => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        // @ts-ignore
        let text = newPostElement.current.value;
        props.store.dispatch(updateNewPostActionCreator(text));
    };

    return (
        <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
            updateNewPost={onPostChange}/>
    )
};

export default MyPostsContainer;