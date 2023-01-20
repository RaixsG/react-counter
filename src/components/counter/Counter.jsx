import { useState } from 'react'
import React from 'react'
import {CounterContainer} from "./styles"

const Counter = () => {

    const [num, setNum] = useState(0);

  const botonS = () => {
    setNum(num + 1);
  } 

  const botonR = () => {
        
    if (num > 0){
      setNum(num - 1);
    }else{
      alert("No puedes ingresar números negativos xd");
    }
  }

  const botonReset =() => {
    setNum(0);
  }
  return (
    <CounterContainer>
        <h1>{num}</h1>
        <button onClick={botonS}><i className="fa-solid fa-plus"></i></button>
        <button onClick={botonR}><i className="fa-solid fa-minus"></i></button>
        <button onClick={botonReset}><i className="fa-solid fa-rotate-right"></i></button>
    </CounterContainer>
  )
}

export default Counter
