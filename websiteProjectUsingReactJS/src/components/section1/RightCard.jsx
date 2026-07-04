import RightCardConent from './RightCardConent'

export const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden  shrink-0 relative w-80 bg-amber-400 rounded-4xl'> 
    <img className='h-full  w-full object-cover ' src={props.img} alt=""></img>
    <RightCardConent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
