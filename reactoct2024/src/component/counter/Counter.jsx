import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increament = ()=>{
      setCount((currNum)=>currNum+1)
    }
    const decreament = ()=>{
      setCount((currNum)=>currNum-1)
    }
  return (
    <div className='counter'>
      <button className='counter_button inc_button' onClick={increament}>+</button>
      <h4>{count < 0 ? 0 : count}</h4>
      <button className='counter_button dec_button' onClick={decreament}>-</button>
    </div>
  )
}

export default Counter
