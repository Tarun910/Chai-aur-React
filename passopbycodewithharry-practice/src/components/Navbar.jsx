import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg bg-black flex justify-around items-center py-6 gap-8'>
      <div className='logo text-white text-4xl' >Passop!</div>
     <ul className='flex  space-x-4 '>
      
      <li className='flex gap-8 text-white text-2xl ' >
        <a className='hover:font-bold' href='/'>Home </a>
        <a className='hover:font-bold' href='#'>Menu </a>
        <a className='hover:font-bold' href='/'>About </a>
        <a className='hover:font-bold' href='/'>Contact </a>
      </li>
     </ul>
    </nav>
  )
}

export default Navbar
