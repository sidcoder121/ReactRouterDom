import React from 'react'

export const App = () => {

  const user={
    username:'Siddharth',
    age:'24',
    city:'Guna',
  }
  localStorage.setItem('user',JSON.stringify(user))

  let get = JSON.parse(localStorage.getItem('user'))
  console.log(get)
  return (
    <div>App</div>
  )
}

export default App