import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg" />
      {props.message}
      <div>
        <span>likes - {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
