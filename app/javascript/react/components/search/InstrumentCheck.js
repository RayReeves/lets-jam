import React, {useState} from "react";

const InstrumentCheck = (props) => {
  const [checked, setChecked] = useState(false)
  const {instrument} = props
  
  return (
    <label>
      {`${instrument.musical_instrument} `}
      <input 
        onChange={props.handleCheckboxChange}
        name={instrument.musical_instrument}
        type="checkbox"
        value={instrument}
      />
    </label>
  )
}

export default InstrumentCheck