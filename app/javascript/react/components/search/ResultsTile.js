import React from "react";
import { Link } from "react-router-dom";

const ResultsTile = (props) => {
  const { result } = props

  let image
  if (result.profile_photo) {
    image = result.profile_photo.url
  }
  
  return (
    <div>
      <img className="search-image" src={image} alt="user profile pic"/>
      <Link to={`/users/${result.id}`} >
        <p>{`${result.username} `}</p>
      </Link>
    </div>
  )
}

export default ResultsTile