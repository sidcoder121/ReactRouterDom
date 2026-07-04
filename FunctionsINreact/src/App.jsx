import React from 'react'

export const App = () => {

  function btnClicked(){
    console.log("Button is clicked")
  }
  return (
    <div>
      <button onClick={btnClicked}>Change User</button>
    </div>
  )
}

export default App
