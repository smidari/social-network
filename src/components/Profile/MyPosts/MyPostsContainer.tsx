import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import {connect} from "react-redux";

let mapStateToProps = (state:any) => {
    return {
        posts :state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPost: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;