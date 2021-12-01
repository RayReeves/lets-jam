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
      <div className="user-info">
        <p className="name">{user.first_name} {user.last_name}<br/>
          <span className="username">( {`${user.username}`} )</span>
        </p>
      </div>
      <div className="user-info">
        <p className="locale">Location:</p>
        <p className="location">{user.zip_code}</p>
      </div>
    </div>
  )
}

export default UserOverview