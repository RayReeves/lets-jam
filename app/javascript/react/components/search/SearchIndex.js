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
        <div className="cell small-4 large-2 checkbox" key={instrument.id}>
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
      <div class="cell small-12 large-3 results-tile">
      <ResultsTile key={result.id}
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
    <div>
      <div className="search grid-x align-center">
        <div className="cell small-10 large-8"></div>
          <form onSubmit={handleSubmit} >
            <div className="searchInputs">
              <div className="grid-x">
                {instrumentCheckBoxes}
              </div>
            </div>
            <input
              className="search-button"
              type="submit"
            />
          </form>
        </div>
        <div class="grid-x">
          {resultsTiles}
        </div>
    </div>
  )
}

export default UserSearch