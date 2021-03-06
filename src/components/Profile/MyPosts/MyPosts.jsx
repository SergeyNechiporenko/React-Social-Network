import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
    // props.updateNewPostText('');
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={classes.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
