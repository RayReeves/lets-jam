import React, { useState, useEffect} from "react";
import helperFetch from "../helpers/Fetcher";
import Message from "./Message";
import TextFieldWithSubmit from "./TextFieldWithSubmit";

const ChatContainer = (props) => {
  const chatId = props.openChat
  const [user, setUser] = useState({})
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState({})
  
  useEffect(() => {
    helperFetch(`/api/v1/users`).then(userData => {
      setUser(userData.user)
    }),
    helperFetch(`/api/v1/chats/${chatId}`).then(chatData => {
      setChat(chatData.chat)
    })
  },
  App.ChatChannel = App.cable.subscriptions.create(
    {
      channel: "ChatChannel",
      chat_id: chatId
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

  if (chat) { 
    console.log(chat.messages)
  }
  
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