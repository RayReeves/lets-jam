import React, { useEffect, useState } from "react";
import helperFetch from "../helpers/Fetcher";
import UserEditFormContainer from "./EditUserFormContainer";

const EditUserDetails = (props) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    helperFetch(`/api/v1/users`).then(userData => {
      setUser(userData.user)
    })
  }, [])

  const editUserDetails = async (formPayload) => {
    try {
      debugger
      const response = await fetch(`/api/v1/users/${user.id}`, {
        method: "PATCH",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify(formPayload)
      })
      console.log(response)
      debugger
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }


  return (
    <div>
      <h1>Testing</h1>
      <div>
      <UserEditFormContainer 
        editUserDetails={editUserDetails} 
      />
    </div>

    </div>
  )
}

export default EditUserDetails