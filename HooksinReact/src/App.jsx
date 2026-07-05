import React, { useState } from 'react'

export const App = () => {

  const [num, setnum] = useState(0);

  function increase(){
    setnum(num+1)
  }

  function decrease(){
    setnum(num-1)
  }

  return (
    <>
    <div>
    <center>
     <h1>{num}</h1>
     <button onClick={increase}>Increase</button>
     <button onClick={decrease}>Decrease</button>
     </center>
     
    </div>
   
    </>
  )
}

export default App