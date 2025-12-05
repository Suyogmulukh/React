// Functional Component Way rendering list using map function

import React from 'react'

const practices1 = () => {
 const fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange'];

  return (
    <div>
      <h2>Fruits List:</h2>
      <ul>
        {fruits.map(fruit =>
          <li>{fruit}</li>)
        }
        {/* {fruits.map((fruit, index) => <li key={fruit}> {fruit} </li>)} */}             {/* adding key prop to avoid warning */}
      </ul>
    </div>
  )
}

export default practices1
