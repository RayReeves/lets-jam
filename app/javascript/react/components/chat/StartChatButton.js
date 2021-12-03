import React from "react";
const StartChatButton = (props) => {

  const handleClick = () => {
    let body = {
      title: props.receivingUser.username,
      sender_id: props.currentUser,
      receiver_id: props.receivingUser
    }
    props.createNewChat(body)
  }

  return (
    <button onClick={handleClick}>Let's Jam!</button>
  )

}

export default StartChatButton