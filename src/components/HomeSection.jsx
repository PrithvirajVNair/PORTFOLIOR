import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const HomeSection = () => {
  return (
    <div id='home' className='flex flex-col justify-center items-center md:items-start h-screen text-white md:px-10 lg:px-20'>
        <h2 className='sm:text-xl md:text-2xl lg:text-3xl'>Hello! I'm <span className="relative text-yellow-200 inline-block
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5
    after:bg-yellow-200 after:origin-left after:scale-x-0
    after:transition-transform after:duration-300 hover:after:scale-x-100">Prithviraj V Nair</span>.</h2>
        <h2 className=' text-3xl sm:text-5xl md:text-7xl lg:text-8xl py-5 md:py-10'>FULL STACK <br /> <span className='text-gray-400'>DEVELOPER</span></h2>
        <div>
            <button className='text-xs md:text-base border py-2 px-3 rounded hover:bg-yellow-200 hover:text-black'><FontAwesomeIcon icon={faFile} className='me-3'/>Resume</button>
        </div>
    </div>
  )
}

export default HomeSection