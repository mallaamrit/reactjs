import React from 'react'

//funtional component (rfce)
function Greet(props) {
  return (
    <div>
        <h1>Good morning {props.name} {props.heroName} </h1>
        {props.children}
    </div>
  )
}

export default Greet