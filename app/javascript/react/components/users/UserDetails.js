import React from "react";

const UserDetails = (props) => {
  const { user } = props
  return (
    <div>
      <p>{user.bio}</p>
    </div>
  )
}

export default UserDetails