import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map( d => <DialogItem ava={d.ava} name={d.name} id={d.id} />);
  let messagesElements = state.messages.map( m => <Message message={m.message} />);
  let newMessageText = state.newMessageText;

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }
  
  let onMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(body));
  }
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={classes.messages}>{messagesElements}</div>
        <div>
          <textarea value={newMessageText} onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
