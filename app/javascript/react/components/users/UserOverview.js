import React from "react";

const UserOverview = (props) => {
  const { user } = props
  return(
    <div>
      <p className="name">{user.first_name} {user.last_name}</p>
      <p className="location">{user.zip_code}</p>
    </div>
  )
}

export default UserOverview