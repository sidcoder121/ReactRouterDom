import React from 'react'
import card from './components/card'

const App = () => {
  return (
   <>
    <div id="container">
      <h1>HELLO, WORLD!</h1>
      <h2>Welcome to my React App</h2>
    </div>
    <div id ="container2"></div>
    {card()} 
   </>
  )
}

export default App