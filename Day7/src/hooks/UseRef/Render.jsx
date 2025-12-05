import React,{useState,useRef} from 'react'

const Render = () => {
    const [count,setCount] = useState(0);
    const renders = useRef(0);

    renders.current = renders.current+1;

  return (
    <div>
        <h3>Count: {count}</h3>
        <h4>Rendered: {renders.current} times</h4>
        <button onClick={()=>setCount(count+1)} className='bg-cyan-300 border-2 px-5'>Increment</button>
    </div>
  )
}
export default Render
