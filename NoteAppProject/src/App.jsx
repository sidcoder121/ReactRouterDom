import React from 'react'

export const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log('Form Submited')
  }
  return (
    <div className='h-screen bg-black text-white  p-10 '>
      <form onSubmit={(e)=>{
        submitHandler(e)

      }} className='flex items-start justify-between flex-col gap-4'>
          <input type='text' 
        placeholder='Enter Notes Heading'
        className='p-5 w-full font-medium border-2 rounded-2xl outline-none '></input>

        <textarea
        placeholder='Enter Details'
        className='p-5 w-full border-2 rounded-2xl h-40 outline-none'
        name=''
        id=''>
        </textarea>
        <button className='bg-white text-black h-15 font-medium w-full'>Add Note</button>
        
      </form>
      <div className='flex flex-wrap p-10'>
        <div className='h-32 w-32 rounded-2xl bg-amber-50'></div>
      </div>

    </div>
  )
}

export default App
