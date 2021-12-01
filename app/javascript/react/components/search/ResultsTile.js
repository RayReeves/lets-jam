import React from "react";
import { Link } from "react-router-dom";

const ResultsTile = (props) => {
  const { result } = props

  let image
  if (result.profile_photo) {
    image = result.profile_photo.url
  }
  
  return (
    <div className="search-return">
      <Link to={`/users/${result.id}`} >
        <img className="search-image" src={image} alt="user profile pic"/>
        <p className="search-link">{`${result.username} `}</p>
      </Link>
    </div>
  )
}

export default ResultsTile