import React from 'react'

const parctices6jsx = (props) => {
  return (
    <div>
          <h2>hello {props.name} </h2>
    </div>
  )
}
parctices6jsx.defaultProps = {
  name: "Guest",
};

export default parctices6jsx
