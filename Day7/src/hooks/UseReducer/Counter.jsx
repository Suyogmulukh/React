
import React, { useReducer } from 'react'
const initialState = 0;
const reducer = (state ,action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        
        case 'decrement':
            return state - 1;
        
        case 'reset':
            return initialState;
    
        default:
            return state;
    }
}


const Counter = () => {

    const [count ,dispatch] = useReducer(reducer , initialState)
  return (
      <div>
          <div>Counter :{count}</div>
          <button onClick={()=> dispatch("increment")} className='border-2 mr-2'> increment </button>

          <button onClick={() => dispatch("decrement")} className='border-2 mr-2'> decrement </button>

          <button onClick={()=> dispatch("reset")} className='border-2 mr-2'> reset </button>  
    </div>
  )
}

export default Counter
