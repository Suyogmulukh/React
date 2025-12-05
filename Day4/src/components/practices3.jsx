// Functional Component Way getting current hour and displaying message accordingly


import React from 'react'

const practices3 = () => {
    const currenHour = new Date().getHours();
    const massage = <p> {currenHour > 12 ? "Good Afternone" : "Good Morning"}</p>
  return (
    <div>
      {massage}
    </div>
  )
}

export default practices3
