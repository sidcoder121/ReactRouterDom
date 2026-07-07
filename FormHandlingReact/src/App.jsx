import React from 'react'

export const  App= () => {

  const submitHandler=()=>{
    console.log("Form Submiitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        submitHandler()
        }}>
        <input type='text' placeholder='type something'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
