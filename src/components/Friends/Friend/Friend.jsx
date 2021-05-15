import React from "react";
import classes from "./../Friends.module.css";

const Friend = (props) => {
   return (
      <div className={classes.dialog + " " + classes.active}>
          <img src={props.ava} />
        {props.name}
    </div>
  )
};

export default Friend;