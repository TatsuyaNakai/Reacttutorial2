import React, {useState} from "react";

export const Square=()=> {
  const [state, setState]=useState({
    value: null
  })
  return (
    <button 
      className="square"
      onClick={()=>setState({
        value: 'X'
      })}
    >
      {state.value}
    </button>
  );
}