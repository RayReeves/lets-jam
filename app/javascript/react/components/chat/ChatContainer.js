import React, { useState, useEffect} from "react";
import helperFetch from "../helpers/Fetcher";
import Message from "./Message";
import TextFieldWithSubmit from "./TextFieldWithSubmit";

const ChatContainer = (props) => {
  const [user, setUser] = useState({})
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    helperFetch(`/api/v1/users`).then(userData => {
      setUser(userData.user)
    })
  },
  App.ChatChannel = App.cable.subscriptions.create(
    {
      channel: "ChatChannel",
      chat_id: 1
    },
    {
      connected: () => console.log("ChatChannel connected"),
      disconnected: () => console.log("ChatChannel disconnected"),
      received: data => {
        console.log(data)
        handleMessageReceipt(data)
      }
    }
  ), [])

  const handleMessageReceipt = (message) => {
    setMessages([...messages, message])
  }
  
  const handleClearForm = () => {
    setMessage("")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    App.ChatChannel.send({
      message: message,
      user: user
    })
    handleClearForm()
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  let messagesComponents = messages.map((message) => {
    return(
      <Message
        key={message.messageId}
        handle={message.user.username}
        message={message.message}
      />
    )
  })

  return (
    <div>
      <div className='callout chat' id='chat-window'>
        {messagesComponents}
      </div>
      <form onSubmit={handleFormSubmit}>
        <TextFieldWithSubmit 
          content={message}
          name='message'
          handlerFunction={handleMessageChange}
        />
      </form>
    </div>
  )
}

export default ChatContainer