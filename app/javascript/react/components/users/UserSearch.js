import React, { useState, useEffect } from "react";
import helperFetch from "../helpers/Fetcher";
import InstrumentCheck from "./InstrumentCheck";

const UserSearch = (props) => {
  const [instruments, setInstruments] = useState([])

  useEffect(() => {
    helperFetch(`/api/v1/instruments`).then(instrumentsData => {
      setInstruments(instrumentsData.instruments)
    })
  }, [])
  
  const instrumentSearch = instruments.map((instrument) => {
      return(
        <div className="cell small-1 large-1" key={instrument.id}>
          <InstrumentCheck 
            instrument={instrument} 
          />
        </div>
      )
    }
  )
  


  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" />
        <div className="grid-x">
          {instrumentSearch}
        </div>
      </div>
      <div className="dataResults">
      </div>
    </div>
  )
}

export default UserSearch