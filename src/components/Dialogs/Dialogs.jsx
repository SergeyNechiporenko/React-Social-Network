import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem ava={d.ava} name={d.name} id={d.id} />);
  let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} />);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
    props.updateNewMessageText('');
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={classes.messages}>{messagesElements}</div>
        <div>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}/>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
