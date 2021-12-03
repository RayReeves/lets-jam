import React from "react";
import { Link } from "react-router-dom";

const ChatTiles = (props) => {

  let username = props.chat.title

  const handleClick = () => {
    props.currentChat(props.chat.id)
  }

  return(
    // <Link to={`/chats/${props.chat.id}`}>{username}</Link>
    <button onClick={handleClick}>{username}</button>
  )
}

export default ChatTiles