import React, { useState, useEffect } from "react";
import helperFetch from "../helpers/Fetcher";
import InstrumentCheck from "./InstrumentCheck";
import ResultsTile from "./ResultsTile";

const UserSearch = (props) => {
  const [instruments, setInstruments] = useState([])
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    helperFetch(`/api/v1/users`).then(userData => {
      setCurrentUser(userData.user)
    })
  }, [])

  useEffect(() => {
    helperFetch(`/api/v1/instruments`).then(instrumentsData => {
      setInstruments(instrumentsData.instruments)
    })
  }, [])

  const handleCheckboxChange = (event) => {
      const selectedInstruments = selectedCheckboxes;
      const isChecked = selectedInstruments.includes(event.target.name);
      if (!isChecked) {
        selectedInstruments.push(event.target.name);
      } else {
        selectedInstruments.splice(selectedInstruments.indexOf(event.target.name), 1);
      }
      setSelectedCheckboxes(selectedInstruments)
  }

  const instrumentCheckBoxes = instruments.map((instrument) => {
      return(
        <div className="cell small-6 medium-4 large-3 checkbox" key={instrument.id}>
          <InstrumentCheck 
            instrument={instrument}
            handleCheckboxChange={handleCheckboxChange} 
          />
        </div>
      )
    }
  )

  const resultsTiles = filteredResults.map((result) => {
    return(
      <div className="cell small-12 large-3 results-tile" key={result.id}>
      <ResultsTile 
        result={result}
      />
      </div>
    )
  }
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    let filteredUsers = []
    instruments.forEach((instrument) => {
      if (selectedCheckboxes.includes(instrument.musical_instrument)) {
        instrument.users.forEach((user) => {
          if (user.id !== currentUser.id) {
            filteredUsers.push(user)
          }
        })
      }
    })
    const uniqueUsers = Array.from(new Set(filteredUsers.map(a => a.id)))
      .map(id => {
        return filteredUsers.find(a => a.id === id)
      })
    setFilteredResults(uniqueUsers)
  }

  return (
    <div className="search-page">
      <div className="grid-x align-center">
        <div className="cell small-10 large-7">
          <h3 className="jammin">Search By Instrument</h3>
          <form onSubmit={handleSubmit} >
            <div className="search-inputs">
              <div className="grid-x">
                {instrumentCheckBoxes}
              </div>
            </div>
            <p className="search-button">
              <input
                type="submit"
                value="Search Users"
                className="nav-text"
              />
            </p>
          </form>
        </div>
      </div>
      <div className="grid-x align-center">
        {resultsTiles}
      </div>  
    </div>
  )
}

export default UserSearch