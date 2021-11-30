import React, {useState} from "react";

const InstrumentCheck = (props) => {
  const {instrument} = props
  
  return (
    <label className="checkbox">
      {`${instrument.musical_instrument} `}
      <input 
        onChange={props.handleCheckboxChange}
        name={instrument.musical_instrument}
        type="checkbox"
      />
    </label>
  )
}

export default InstrumentCheck