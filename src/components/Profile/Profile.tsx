import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";



const Profile = (props: any) => (
    <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>
);

export default Profile;