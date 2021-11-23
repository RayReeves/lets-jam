import React, { useState, useEffect} from "react";
import helperFetch from "../helpers/Fetcher";

const UserShowContainer = (props) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    helperFetch(`/api/v1/users`).then(userData => {
      setUser(userData.user)
    })
  }, [])
  
  return (
    <div>
      <h1>Let Me See Something</h1>
    </div>
  )

}

export default UserShowContainer