import React from 'react'

const onclick = () => {
    
    const shoot = () => {
        alert("Great Shot!")
    }
    
  return (
    <div>
      <button onClick={shoot}>This are the shoot</button>
    </div>
  )
}

export default onclick
