import React from "react";
import { Link } from "react-router-dom";

const ChatTiles = (props) => {
  
  let username = props.chat.title

  return(
    <Link to={`/chats/${props.chat.id}`}>{username}</Link>
  )
}

export default ChatTiles