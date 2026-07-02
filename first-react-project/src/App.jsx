import React from 'react'
import Card from './components/card'


const App = () => {
  return (
   <>
   <div className='parent'>
    <Card user="Siddharth Saxena" img="https://st2.depositphotos.com/3643473/86157/i/450/depositphotos_861571742-stock-photo-figure-talking-mobile-phone-business.jpg"/>
    <Card user="John Doe" img="https://images.unsplash.com/photo-1698758004450-1f9da080f9b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
   </div>
  
   </>
  )
}

export default App