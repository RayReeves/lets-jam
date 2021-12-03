import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import helperFetch from "../helpers/Fetcher";
import UserDetails from "./UserDetails";
import UserOverview from "./UserOverview";
import StartChatButton from "../chat/StartChatButton";

const UserShowContainer = (props) => {
  const userId = props.match.params.id
  const [currentUser, setCurrentUser] = useState({})
  const [user, setUser] = useState({})
  const [chat, setChat] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false) 
  
  useEffect(() => {
    helperFetch(`/api/v1/users/${userId}`).then(userData => {
      setUser(userData.user)
    });
    helperFetch(`/api/v1/users`).then(userData => {
      setCurrentUser(userData.user)
    })
  }, [])

  const createNewChat = async (formPayload) => {
    try {
      const response = await fetch("/api/v1/chats", {
        credentials: "same-origin",
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        throw(new Error(errorMessage))
      }
      const newChat = await response.json()
      setChat(newChat)
      setShouldRedirect(true)
    } catch(err) {
      console.log(err)
    }
  }

  const userOverview = (
    <UserOverview
      user={user}
    />
  )

  const userDetails = (
    <UserDetails
      user={user}/>
  )

  const letsJam =(
    <StartChatButton 
      currentUser={currentUser}
      receivingUser={user}
      createNewChat={createNewChat}
    />
  )

  if (shouldRedirect) {
    return <Redirect to={`/chats/${chat.id}`} />
  }

  return (
    <div className="user-container-div">
      <div className=" cell small-10 large-10">
        <div className="grid-x grid-margin-x">
          <div className="cell small-3 large-3 overview">
            {userOverview}
          </div>
          <div className="cell small-8 large-7 details">
            {userDetails}
          </div>
          <div className="cell small-1 large-2">
            <div>
              <Link to={"/search"} className="nav-text edit-button">
                Return To Search
              </Link>
              {letsJam}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default UserShowContainer