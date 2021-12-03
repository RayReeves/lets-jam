import React, { useState, useEffect } from "react";
import ChatTiles from "./ChatTiles";
import ChatContainer from "./ChatContainer";
import helperFetch from "../helpers/Fetcher";

const ChatIndex = (props) => {
  const [user, setUser] = useState({})
  const [openChat, setOpenChat] = useState(null)

  useEffect(() => {
    helperFetch(`/api/v1/users`).then(userData => {
      setUser(userData.user)
    })
  }, [])

  let currentChat = (chatId) => {
    setOpenChat(chatId)
  }
  
  let chatTiles
  if (user.chats) {
    chatTiles = user.chats.map((chat) => {
        return(
          <div key={chat.id}>
            <ChatTiles
              currentChat={currentChat}
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