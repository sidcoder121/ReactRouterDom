import React from 'react'

export const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <form className='flex items-start flex-col gap-4 p-10 '>
        <input type='text' 
        placeholder='Enter Notes Heading'
        className='p-5 w-1/2 border-2 rounded-2xl '></input>

        <input type='text'
        placeholder='Enter Details'
        className='p-5 w-1/2 border-2 rounded-2xl h-25'
        name=''
        id=''>
        </input>
        <button className='bg-white text-black h-15 w-1/2'>Add Note</button>
      </form>

    </div>
  )
}

export default App
