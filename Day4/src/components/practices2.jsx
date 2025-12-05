// Functional Component Way getting name and current year and next year


import React from 'react'

const practices2 = () => {
    const name = "Suyog";
    const year = new Date().getFullYear();
  return (
      <div>
          <p>name = {name}</p>
          <p>current Year = {year}</p>
          <p>next Year = {year+1}</p>
    </div>
  )
}

export default practices2
