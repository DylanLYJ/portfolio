import React from 'react'

export const Navbar = () => {
  return (
    <nav className="fixed bg-darkblack text-white flex justify-between items-center px-4 py-3 w-full z-500">
      <div className="space-x-4 ml-auto px-3" >
        <button className="hover:text-blue-400 px-6 py-1 font-mono">Home</button>
        <button className="hover:text-blue-400 px-6 py-1 font-mono">About</button>
        <button className="hover:text-blue-400 px-6 py-1 font-mono">Projects</button>
        <button className="hover:text-black px-6 py-1 bg-blue-500 font-mono rounded-md">Contact</button>
      </div>
    </nav>
  )
}

export default Navbar