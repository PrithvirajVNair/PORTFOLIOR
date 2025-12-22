import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='text-white text-center text-xs sm:text-base bg-white/10'>
          <p className='px-5'>&copy; <a href='#home' className='text-yellow-200'>Prithviraj V Nair</a> Portfolio - {new Date().toLocaleString('default',{month:'long'})} {new Date().getFullYear()} | &reg; All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer