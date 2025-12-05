import React from 'react'

const withParameter = () => {
    
    const shoot = ( massage, event ) => {
        alert(`Great Shot! ${massage} ${event.type}`)
    }
    
  return (
      <div>
          <button onClick={(e) => shoot( "Suyog",e)}>
              This are the shoot
          </button>   
    </div>
  )
}

export default withParameter
