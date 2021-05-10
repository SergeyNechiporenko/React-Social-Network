import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It is my first post", likesCount: 20 },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ];

  let postsElements = posts.map( p => <Post message={p.message} likes={p.likesCount} />)

  return (
    <div className={classes.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
