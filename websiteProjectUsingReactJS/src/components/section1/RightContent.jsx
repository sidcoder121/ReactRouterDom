import React from 'react'
import { RightCard } from './RightCard'

export const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap overflow-x-auto gap-10 p-6 w-3/3'>
        {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
})}
    </div>
  )
}
export default RightContent