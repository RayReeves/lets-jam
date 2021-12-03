import React, { useState, useEffect } from "react";
import ChatTiles from "./ChatTiles";
import ChatContainer from "./ChatContainer";
import helperFetch from "../helpers/Fetcher";

const ChatIndex = (props) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    helperFetch(`/api/v1/users`).then(userData => {
      setUser(userData.user)
    })
  }, [])
  
  let chatTiles
  if (user.chats) {
    chatTiles = user.chats.map((chat) => {
        return(
          <div key={chat.id}>
            <ChatTiles
              chat={chat}
            />
          </div>
        )
      }
    )
  }

  return(
    <div>
      {chatTiles}
    </div>
  )

}

export default ChatIndex