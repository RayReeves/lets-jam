import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import helperFetch from "../helpers/Fetcher";
import UserDetails from "./UserDetails";
import UserOverview from "./UserOverview";

const UserShowContainer = (props) => {
  const userId = props.match.params.id
  const [user, setUser] = useState({})
  useEffect(() => {
    helperFetch(`/api/v1/users/${userId}`).then(userData => {
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
      <div className=" cell small-10 large-10">
        <div className="grid-x">
          <div className="cell small-3 large-3 overview">
            {userOverview}
          </div>
          <div className="cell small-8 large-7 details">
            {userDetails}
          </div>
          <div className="cell small-1 large-2">
            <div>
              <Link to={"/search"}>
                Return To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default UserShowContainer