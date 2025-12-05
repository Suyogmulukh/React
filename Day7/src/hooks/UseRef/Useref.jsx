import React,{useRef} from 'react'

const Useref = () => {
    let userInput = useRef(null);
    const focusInput = () => {
        userInput.current.focus();
    };
  return (
      <div>
          <input type="text" ref={userInput} placeholder='Type here...... ' className='hover:bg-amber-200 ml-10'/>
        <button onClick={focusInput} className='hover:bg-blue-300 '>Focus Input</button>
    </div>
  )
}

export default Useref
