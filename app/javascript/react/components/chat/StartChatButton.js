import React from "react";
const StartChatButton = (props) => {

  const handleClick = () => {
    let body = {
      title: `${props.currentUser.username} with ${props.receivingUser.username}`,
      sender_id: props.currentUser.id,
      receiver_id: props.receivingUser.id
    }
    props.createNewChat(body)
  }

  return (
    <button className="nav-text" onClick={handleClick}>Let's Jam!</button>
  )

}

export default StartChatButton