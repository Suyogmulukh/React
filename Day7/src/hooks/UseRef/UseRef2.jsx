import React, { useEffect, useRef, useState } from 'react'

const UseRef2 = () => {
    const [count,setCount] = useState(0);
    const preCount = useRef();
    useEffect(()=>{
        preCount.current = count;
    },[count]);
  return (
    <div>
        <h3>current count: {count}</h3>
        <h3>previous count: {preCount.current}</h3>
          <button onClick={() =>
              setCount(count + 1)} className='bg-cyan-300 border-2 px-5'>
              Increment
          </button>
    </div>
  )
}
export default UseRef2
