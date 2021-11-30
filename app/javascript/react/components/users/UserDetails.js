import React from "react";

const UserDetails = (props) => {
  const { user } = props

  let instruments = ""
  let getInstruments = async(props) => {
    props.forEach((instrument) => {
      instruments = instruments + `${instrument.musical_instrument} `
    })
    return instruments
  }
  getInstruments(user.instruments)

  return (
    <div>
      <p>{instruments}</p>
      <p>{user.bio}</p>
    </div>
  )
}

export default UserDetails