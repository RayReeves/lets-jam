import React from "react";
import { Link } from "react-router-dom";

const ResultsTile = (props) => {
  const { result } = props
  
  return (
    <div>
      {`${result.username} `}
    </div>
  )
}

export default ResultsTile