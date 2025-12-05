import React, {useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    }

  return (
    <div>
          <p>Count : {count}</p>
          <button onClick={increment}>Increse</button>
          <button onClick={decrement}>decrese</button>
    </div>
  )
}

export default UseState
