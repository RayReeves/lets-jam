import React from "react";

const UserDetails = (props) => {
  const { user } = props

  let instruments = ""
  if (user.instruments) {
    user.instruments.forEach((instrument) => {
      instruments = instruments + `${instrument.musical_instrument} | `
    })
  }

  return (
    <div>
      <p>{instruments}</p>
      <p>{user.bio}</p>
    </div>
  )
}

export default UserDetails