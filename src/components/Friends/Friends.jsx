import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";

const Friends = (props) => {

  let friendsElements = props.state.friends.map( f => <Friend ava={f.ava} name={f.name} />)

  return (
    <div>
      My Friends:
      { friendsElements }
    </div>
  )
};

export default Friends;