import React, { useState, useEffect } from "react";
import ChatTiles from "./ChatTiles";
import ChatContainer from "./ChatContainer";
import helperFetch from "../helpers/Fetcher";

const ChatIndex = (props) => {
  const [user, setUser] = useState({})
  const [openChat, setOpenChat] = useState(null)
  const [persistedMessages, setPersistedMessages] = useState([])

  useEffect(() => {
    helperFetch(`/api/v1/users`).then(userData => {
      setUser(userData.user)
      if (props.location.chat) {
        setOpenChat(props.location.chat)
      }
    })
  }, [])

  let persistMessages = (chatId) => {
    helperFetch(`/api/v1/messages/${chatId}`).then(messageData => {
      setPersistedMessages(messageData.messages)
      if (openChat === null) {
        setOpenChat(chatId)
      } else {
        setOpenChat(null)
      }
    })
  }
  
  let chatTiles
  if (user.chats) {
    chatTiles = user.chats.map((chat) => {
        return(
          <div key={chat.id}>
            <ChatTiles
              persistMessages={persistMessages}
              chat={chat}
            />
          </div>
        )
      }
    )
  }

  
  let chatContainer
  if (openChat !== null){
    chatContainer = 
      <ChatContainer
        persistedMessages={persistedMessages}
        openChat={openChat}
      />
  }

  return(
    <div className="grid-x">
      <div className="cell small-6 large-6">
        {chatTiles}
      </div>
      <div className="cell small-6 large-6">
        {chatContainer}
      </div>
    </div>
  )

}

export default ChatIndex