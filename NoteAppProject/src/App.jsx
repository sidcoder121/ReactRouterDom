import React from 'react'

export const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <form className='flex items-start justify-between  p-10 '>
        <div className='w-1/2  gap-4 flex items-start flex-col'>
          <input type='text' 
        placeholder='Enter Notes Heading'
        className='p-5 w-full border-2 rounded-2xl outline-none '></input>

        <textarea
        placeholder='Enter Details'
        className='p-5 w-full border-2 rounded-2xl h-40 outline-none'
        name=''
        id=''>
        </textarea>
        <button className='bg-white text-black h-15 w-full'>Add Note</button>
        </div>
        
      </form>

    </div>
  )
}

export default App
