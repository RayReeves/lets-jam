import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import helperFetch from "../helpers/Fetcher";

const UserEditFormContainer = (props) => {
  const [instruments, setInstruments] = useState({})
  const [formData, setFormData] = useState(props.user)
  const [shouldRedirect, setShouldRedirect] = useState(false)
  
  useEffect(() => {
    helperFetch(`/api/v1/instruments`).then(userData => {
      setInstruments(instruments.instrument)
    })
  }, [])
  
  const handleChange = event => {
    event.preventDefault()
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
    console.log(formData)
  }

  const handleSubmit = event => {
    event.preventDefault
    props.editUserDetails(formData)
    setShouldRedirect(true)
  }

  if (shouldRedirect) {
    <Redirect to='/users' />
  }

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            onChange={handleChange}
            name="first_name"
            id="first_name"
            type="text"
            value={formData.first_name}
          />
        </label>
        <label>
          Last Name:
          <input
            onChange={handleChange}
            name="last_name"
            id="last_name"
            type="text"
            value={formData.last_name}
          />
        </label>
        <label>
          Biography:
          <input
            onChange={handleChange}
            name="bio"
            id="bio"
            type="textbox"
            value={formData.bio}
          />
        </label>
        <input className="edit-button" type="submit" value="Update" />
      </form>
    </div>
  )
}

export default UserEditFormContainer
