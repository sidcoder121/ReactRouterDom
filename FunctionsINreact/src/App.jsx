import React from 'react'

export const App = () => {

  return (
    <div>
      <button onClick= { function btnClicked(){
    console.log("Button is clicked");
  }}>Change User</button>
    </div>
  )
}

export default App
