import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => (
  <div className={s.myposts}>
    <div className={s.addpost}>
      <h4>My posts</h4>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
      <Post message='How are you'/>
      <Post message='its my first posts'/>
      <Post/>
      <Post/>
    </div>
  </div>
);

export default MyPosts;