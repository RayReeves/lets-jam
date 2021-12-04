import React, { useState } from "react";

const ChatTiles = (props) => {
  let username = props.chat.title

  const handleClick = () => {
    props.persistMessages(props.chat.id)
  }

  return(
    <button onClick={handleClick}>{username}</button>
  )
}

export default ChatTiles