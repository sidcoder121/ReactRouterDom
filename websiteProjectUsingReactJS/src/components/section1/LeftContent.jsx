import React from 'react'
import 'remixicon/fonts/remixicon.css'

export const LeftContent = () => {
  return (
    <div className='h-full flex flex-col w-1/3' >
        <div className='p-6'>
            <h3 className = "mb-7 text-7xl  font-bold" >Prospective <br></br><span className='text-gray-700' >customer</span><br></br> segmentation</h3>
            <p className=' text-xl font-medium text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam explicabo nemo dolorem, id voluptatibus expedita quam alias ipsam eum neque.</p>
        </div>
        <div className='text-8xl'>
            <i className="ri-arrow-right-up-line"></i>
        </div>
    </div>
  )
}

export default LeftContent
