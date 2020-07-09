import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostType, ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
}

const Profile: React.FC<ProfileType> = props => (
    <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}/>
    </div>
);

export default Profile;