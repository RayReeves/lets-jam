import React, { useState, useEffect} from "react";
import helperFetch from "../helpers/Fetcher";
import UserOverview from "./UserOverview";
import UserDetails from "./UserDetails";

const UserIndex = (props) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    helperFetch(`/api/v1/users`).then(userData => {
      setUser(userData.user)
    })
  }, [])

  const userOverview = (
    <UserOverview
        user={user}/>
  )

  const userDetails = (
    <UserDetails
      user={user}/>
  )
  
  let editElement = <span><a className="edit-button" href={`/users/${user.id}/edit`}>Personalize Your Profile</a></span>
  
  return (
    <div>
      <h1>Welcome {user.first_name}</h1>
      <div className="grid-x ">
        <div className="cell small-3 large-3 overview">
          {userOverview}
        </div>
        <div className="cell small-8 large-7 details">
          {userDetails}
        </div>
        <div className="cell small-1 large-2">
          {editElement}
        </div>
      </div>
    </div>
  )

}

export default UserIndex