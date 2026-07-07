import React, { useState } from 'react'


export const  App= () => {
  const [title, settitle] = useState('')

  const submitHandler=()=>{
    console.log("Form Submiitted",title)
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        submitHandler()
        }}>
        <input type='text' placeholder='type something' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
