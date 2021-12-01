import React, {useState} from "react";

const InstrumentCheck = (props) => {
  const {instrument} = props
  
  return (
    <label className="checkbox">
      
      <input 
        onChange={props.handleCheckboxChange}
        name={instrument.musical_instrument}
        type="checkbox"
      />
      {`${instrument.musical_instrument} `}
    </label>
  )
}

export default InstrumentCheck