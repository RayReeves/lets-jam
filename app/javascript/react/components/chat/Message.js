import React from "react";
import { Link } from "react-router-dom";

const Message = ({handle, message, avatar}) => {

  return (
    <div className="grid-x message-div">
      <div className="cell small-1 large-1">
        <span className="chat-avatar"><img className="chat-avatar" src={avatar.url} /></span>
      </div>
      <div className="cell small-10 large-10" >
        <p className="chat-handle dm"> {handle}: </p>
        <p className="chat-message dm">{message}</p>
      </div>
    </div>
  )
}

export default Message