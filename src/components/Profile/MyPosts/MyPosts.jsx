import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => (
  <div>
    My posts
    <div>
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