import React from 'react'

export const App = () => {
  async function getdata(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)
  }
  return (
    <button onClick={getdata}>Get Data</button>
  )
}

export default App
