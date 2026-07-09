import React, { useEffect, useState } from 'react'

export const App = () => {

  const [num, setnum] = useState(0)
  useEffect(function(){
    console.log('Use effect is running...')
  })

  return (
    <>
    <h1>{num}</h1>
   <button onClick={()=>{
    setnum(10)
   }}>click</button>
   </>
  )
}

export default App