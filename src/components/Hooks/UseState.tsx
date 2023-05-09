import React, { useState } from 'react'

function UseState() {
	const [Counter,setCounter]= useState(0);
	const IncrementHandler=()=>{
		setCounter(Counter + 1);
	
	}
	const DecrementHandler=()=>{
		setCounter(Counter - 1);
	}
  return (
    <>
      <button onClick={IncrementHandler}>+</button>
		  <h4>{Counter}</h4>
        <button onClick={DecrementHandler}>-</button>
    </>
  );
}

export default UseState
