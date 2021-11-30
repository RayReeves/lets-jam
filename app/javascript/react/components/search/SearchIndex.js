import React, { useState, useEffect } from "react";
import helperFetch from "../helpers/Fetcher";
import InstrumentCheck from "./InstrumentCheck";

const UserSearch = (props) => {
  const [instruments, setInstruments] = useState([])
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([])
  const [users, setUsers] = useState([])

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
        <div className="cell small-1 large-1" key={instrument.id}>
          <InstrumentCheck 
            instrument={instrument}
            handleCheckboxChange={handleCheckboxChange} 
          />
        </div>
      )
    }
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    setUsers([])
    let filteredUsers = []
    instruments.forEach((instrument) => {
      if (selectedCheckboxes.includes(instrument.musical_instrument)) {
        instrument.users.forEach((user) => {
          if (!filteredUsers.includes(user)) {
            filteredUsers.push(user)
          }
        })
      }
    })
    setUsers(filteredUsers)
    debugger
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit} >
        <div className="searchInputs">
          <div className="grid-x">
            {instrumentCheckBoxes}
          </div>
        </div>
        <input
          class="search-button"
          type="submit"
        />
      </form>
    </div>
  )
}

export default UserSearch