import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='md:px-16 py-8'>
      <div className='flex flex-col justify-center h-[80vh] items-center'>
        <h1 className=' font-mono px-2 text-center text-3xl md:text-6xl '>
          Welcome to CRYPTO CLUB<span className='text-6xl'> ☯</span>
        </h1>
        <Link to="/coins">
          <button className='py-3 px-4 text-white mt-6 rounded-full bg-cyan-600 font-mono'>
            Explore Coins
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Homepage
