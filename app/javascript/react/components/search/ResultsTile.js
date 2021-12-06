import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import helperFetch from "../helpers/Fetcher";

const ResultsTile = (props) => {
  const { result } = props
  const [user, setUser] = useState({})

  useEffect(() => {
    helperFetch(`/api/v1/users/${result.id}`).then(userData => {
      setUser(userData.user)
    })
  }, [])

  let userInstruments
  if (user.instruments) {
    debugger
    userInstruments = user.instruments.map((instrument) => {
      return(
      <span className="result-paragraph">{instrument.musical_instrument} | </span>
      )
    })
  }

  let image
  if (result.profile_photo) {
    image = result.profile_photo.url
  }
  
  return (
    <div className="search-return">
      <Link to={`/users/${result.id}`} >
        <img className="search-image" src={image} alt="user profile pic"/>
        <p className="search-link result-paragraph">{`${result.username} `}</p>
        {userInstruments}
      </Link>
    </div>
  )
}

export default ResultsTile