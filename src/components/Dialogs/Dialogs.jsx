import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map( d => <DialogItem ava={d.ava} name={d.name} id={d.id} />)
  let messagesElements = props.state.messages.map( m => <Message message={m.message} />)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
         {dialogsElements}
      </div>
      <div className={classes.messages}>
          {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
