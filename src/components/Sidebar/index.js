import React from 'react'

const Sidebar = () => {
  const sidebarMenu = [
    {
      label: 'Menu',
      children: [
        { name: 'Discover', icon: 'fas fa-home'},
        { name: 'Trending', icon: 'fas fa-arrow-right'},
        { name: 'Streaming', icon: 'fas fa-download'},
        { name: 'Playlist', icon: 'fas fa-file-download'},
        { name: 'Bookmark', icon: 'fas fa-bookmark'},
      ]
    },
    {
      label: 'Category',
      children: [
        { name: 'Live Stream', icon: 'fas fa-home'},
        { name: 'Tutorial', icon: 'fas fa-arrow-right'},
        { name: 'Competition', icon: 'fas fa-download'},
        { name: 'Community', icon: 'fas fa-file-download'},
      ]
    }
  ]

  return (
    <div className='px-8 pt-2 -mt-10 divide-y divide-gray-800'>      
      {sidebarMenu.map(side => ( 
        <div key={side.children.map(i => i.name)} className='py-10'>
          <span className='tracking-widest text-gray-500 uppercase text-xxs'>
            {side.label}
          </span>
          <ul className='flex flex-col pt-5 space-y-8'>
            {side.children.map(item => (
              <li key={item.name} className='flex items-center space-x-4 group'>
                <span className='p-2 text-gray-500 bg-gray-800 rounded-xl group-hover:text-white group-hover:bg-orange'>
                  <div  className={`fill-current ${item.icon}`} />
                </span>
                <a 
                  href="/" 
                  className='text-sm text-gray-500 group-hover:text-white group-hover:font-semibold'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
