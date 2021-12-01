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
    <div className="grid-x grid-margin-x">
      <h1>Welcome {user.first_name}</h1>
      <div className="cell small-10 large-10">
        <div className="grid-x grid-margin-x">
          <div className="cell small-3 large-4 overview">
            {userOverview}
          </div>
          <div className="cell small-8 large-6 details">
            {userDetails}
          </div>
          <div className="cell small-1 large-2">
            <div><a className="edit-button" href={`/users/${user.id}/edit`}>Personalize Your Profile</a></div>
            <div>
              <Link to={"/search"}>
                Find Fellow Musicians
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default UserIndex