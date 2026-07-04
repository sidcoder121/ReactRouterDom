import React from 'react'
import { Section1 } from './components/section1/section1'
import { Section2 } from './components/section2/section2'

export const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'UnderServed'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Reserved'
    },
    {
      img:'https://images.unsplash.com/photo-1585554414787-09b821c321c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Hiring'
    },
  ]
  return (
    <div>
      <Section1  users = {users}/>
      <Section2/>
    </div>
  )
}

export default App