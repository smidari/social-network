import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PostType} from "../../../types/entities";

type mapStatePropsType = {
    posts: Array<PostType>
    newPostText: string

};
type mapDispatchPropsType = {
    addPost: () => void
    updateNewPost: (text: string) => void
}

export type MyPostPropsType = mapStatePropsType & mapDispatchPropsType;

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPost: (text) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
};
const connector = connect(mapStateToProps, mapDispatchToProps);
const MyPostsContainer = connector(MyPosts);
export default MyPostsContainer;