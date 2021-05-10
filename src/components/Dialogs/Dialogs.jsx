import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogsItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ];
  
  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ];

  let dialogsElements = dialogs.map( d => <DialogsItem name={d.name} id={d.id} />)

  let messagesElements = messages.map( m => <Message message={m.message} />)

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
