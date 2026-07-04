import React from 'react'
import { RightCard } from './RightCard'

export const RightContent = (props) => {
  return (
    <div className='h-full flex flex-npwrap overflow-x-auto gap-10 p-6 w-3/3'>
        {props.users.map(function(elem){
        return <RightCard img={elem.img}/>
})}
    </div>
  )
}
export default RightContent