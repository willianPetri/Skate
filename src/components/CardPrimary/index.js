import React from 'react'
import avatar1 from '../../img/avatar-3.png'
import avatar2 from '../../img/avatar-2.png'
import bg1 from '../../img/bg-1.png'
import bg2 from '../../img/bg-2.png'

const CardPrimary = ({card, index}) => { 
  return (
    <div className={`h-96 rounded-2.5xl p-10 bg-no-repeat bg-cover overflow-hidden relative ${index === 0 ? 'w-2/3' : 'w-1/3'}`} style={{ backgroundImage: `url(${index === 0 ? bg1 : bg2})` }} >
      <h3 className='text-3xl font-semibold max-w-xxs'>{card.title}</h3>
       <div className="flex flex-wrap-reverse items-center pr-24 pt-4">
         <div className="relative flex items-center justify-center rounded-full w-14 h-14">
           <img src={index === 0 ? avatar1 : avatar2} alt="" className="w-12 h-12 rounded-full" />
           <span className="absolute inset-0 border rounded-full border-gray-400" />
           <i className='fas fa-check absolute bottom-0 right-0' />
         </div>
         <div className="flex flex-col py-4 pl-2">
           <a href="/" className='font-medium tracking-wider'>
             {card.name}
           </a>
           <span className='text-xs tracking-wider text-gray-200'>{card.views} . {card.created_at}</span>
         </div>
       </div>
       <span className="px-2 py-0.5 absolute right-5 bottom-5 rounded-lg bg-gray-800 text-xxs">
         {card.duration}
       </span>
    </div>
  )
}

export default CardPrimary
