import React from "react";
import { Redirect } from "react-router";
const StartChatButton = (props) => {

  const handleClick = () => {
    let body = {
      title: "PRIVATE",
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