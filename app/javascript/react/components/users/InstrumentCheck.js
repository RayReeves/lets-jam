import React from "react";

const InstrumentCheck = (props) => {
  const {instrument} = props
  
  return (
    <label>
      {`${instrument.musical_instrument} `}
      <input 
        name={instrument.musical_instrument}
        type="checkbox"
      />
    </label>
  )
}

export default InstrumentCheck