import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import helperFetch from "../helpers/Fetcher";
import UserOverview from "./UserOverview";
import UserDetails from "./UserDetails";
import UserSearch from "../search/SearchIndex";

const UserIndex = (props) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    helperFetch(`/api/v1/users`).then(userData => {
      setUser(userData.user)
    })
  }, [])

  const userOverview = (
    <UserOverview
      user={user}
    />
  )

  const userDetails = (
    <UserDetails
      user={user}/>
  )
  
  return (
    <div className="user-container-div">
      <div className="grid-x">
        <div className="cell welcome-header small-3 large-4">
          <h1 className="jammin">Welcome {user.first_name}</h1>
        </div>
      </div>
      <div className="grid-x grid-margin-x">
        <div className="cell small-3 large-4 overview">
          {userOverview}
        </div>
        <div className="cell small-6 large-6 details">
          {userDetails}
        </div>
        <div className="cell small-2 large-2">
          <div><a className="nav-text edit-button" href={`/users/${user.id}/edit`}>Personalize Your Profile</a></div>
          <div>
            <Link to={"/search"} className="nav-text edit-button" >
              Find Fellow Musicians
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )

}

export default UserIndex