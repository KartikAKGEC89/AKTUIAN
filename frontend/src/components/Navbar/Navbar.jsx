import React from 'react'

const Navbar = () => {
  const menus = [{
    id: 1,
    name: "Home",
    link:"/#"
  },
  {
    id: 2,
    name: "Services",
    link:"/#services"
  }]
  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white'>
      <div className="container py-2">
        <div className="flex justify-between">
          <div className='font-bold text-2xl sm:text-3xl flex justify-center item-center gap-2 font-serif'>Code with CHAI</div>
          <div className='flex justify-between items-center gap-4'>
            <ul className='hidden sm:flex items-end gap-6'>
              {menus.map((menu, index) => (
                <li key={index}>
                  <a href={menu.link} className='inline-block text-xl py-4 px-4 gap-4 text-white/70 hover:text-white duration-200'>
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className='bg-primary px-4 py-2 rounded-full hover:scale-105 duration-100'>Chat</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
