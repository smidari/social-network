import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => (
  <div className={s.content}>
    <div><img
      src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
      alt=""/></div>
    <div>
      ava
    </div>
  <MyPosts/>
  </div>
);

export default Profile;