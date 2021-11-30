import React from "react";

const UserOverview = (props) => {
  const { user } = props
  let image
  if (user.profile_photo) {
    image = user.profile_photo.url
  }
  return(
    <div>
      <img className="user-profile-pic" src={image} alt="user profile pic"/>
      <p className="name">{user.first_name} {user.last_name}</p>
      <p className="location">{user.zip_code}</p>
    </div>
  )
}

export default UserOverview