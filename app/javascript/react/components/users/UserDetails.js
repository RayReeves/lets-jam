import React from "react";

const UserDetails = (props) => {
  const { user } = props

  let instruments = "| "
  if (user.instruments) {
    user.instruments.forEach((instrument) => {
      instruments = instruments + `${instrument.musical_instrument} | `
    })
  }

  let bio
  if (user.bio !== null) {
    bio = <div className="user-info"><p className="bio">{user.bio}</p></div>
  }

  let instrumentsDiv
  if (instruments !== "| ") {
    instrumentsDiv = <div className="instruments-container user-info">
      <p>Instruments:</p>
      <p className="musical_instruments">{instruments}</p>
    </div>
  }

  return (
    <div>
      {instrumentsDiv}
      {bio}
    </div>
  )
}

export default UserDetails