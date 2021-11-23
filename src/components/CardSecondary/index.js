import React from 'react'
import avatar1 from '../../img/avatar-6.png'
import bg1 from '../../img/bg-3.png'
import avatar2 from '../../img/avatar-4.png'
import bg2 from '../../img/bg-7.png'
import avatar3 from '../../img/avatar-8.png'
import bg3 from '../../img/bg-6.png'
import avatar4 from '../../img/avatar-7.png'
import bg4 from '../../img/bg-4.png'

const CardSecondary = ({ card, index }) => {
  function handleBg(index){
    if(index === 0 ) {
      return bg1;
    } else if (index === 1) {
      return bg2
    } else if (index === 2) {
      return bg3
    } else if (index === 3) {
      return bg4
    }
  }

  function handleAvatar(index){
    if(index === 0 ) {
      return avatar1;
    } else if (index === 1) {
      return avatar2
    } else if (index === 2) {
      return avatar3
    } else if (index === 3) {
      return avatar4
    }
  }

  return (
    <div className='w-64 rounded-2.5xl overflow-hidden relative'>
      <img src={handleBg(index)} alt="" className='h-40' />
      <div className='absolute flex items-center justify-center rounded-full right-5 top-34 w-14 h-14' >
        <img src={handleAvatar(index)} alt="" className="w-12 h-12 rounded-full" />
        <span className='absolute inset-0 border rounded-full border-gray-400' />
        <div className='bg-blue-600'>
          <i className='absolute bottom-0 right-0' />
        </div>
      </div>
      <span className="px-2 py-0 absolute right-2 top-2 text-white rounded-lg bg-gray-800 text xxs">
        {card.duration}
      </span>
      <div className="px-5 py-5 bg-gray-800">
        <div className="flex items-center">
          <span className="text-xs font-normal tracking-wider text-gray-400">
            {card.name}
          </span>
          <span className={`w-2 h-2 ml-2 rounded-full ${card.color === 'green' ? 'bg-green' : 'bg-orange'}`} />
        </div>
        <h3 className="inline-block pt-1 font-medium leading-relaxed">{card.title}</h3>
        <span className="inline-block pt-4 text-sm tracking-wider text-gray-500">
          {card.views} . {card.created_at}
        </span>
      </div>
    </div>
  )
}

export default CardSecondary
