import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ActionsType, ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void

}

const Profile: React.FC<ProfileType> = props => (
    <div className={s.content}>
        <ProfileInfo/>
        <MyPosts
            posts={props.profilePage.posts}
            dispatch={props.dispatch}
            newPostText={props.profilePage.newPostText}/>
    </div>
);

export default Profile;