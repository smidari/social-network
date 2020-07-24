import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void

}

const Profile: React.FC<ProfileType> = props => (
    <div className={s.content}>
        <ProfileInfo/>
        <MyPosts
            posts={props.profilePage.posts}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            newPostText={props.profilePage.newPostText}/>
    </div>
);

export default Profile;