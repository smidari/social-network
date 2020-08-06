import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text: any) => {
                    store.dispatch(updateNewPostActionCreator(text));
                };
                return (<MyPosts
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    updateNewPost={onPostChange}/>)
            }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;