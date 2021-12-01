import React from "react";

const UserDetails = (props) => {
  const { user } = props

  let instruments = ""
  if (user.instruments) {
    user.instruments.forEach((instrument) => {
      instruments = instruments + `${instrument.musical_instrument} | `
    })
  }

  let bio
  if (user.bio !== "") {
    bio = <div className="user-info"><p className="bio">{user.bio}</p></div>
  }

  return (
    <div>
      <div className="instruments-container user-info">
        <p>Instruments:</p>
        <p className="musical_instruments">{instruments}</p>
      </div>
      {bio}
    </div>
  )
}

export default UserDetails