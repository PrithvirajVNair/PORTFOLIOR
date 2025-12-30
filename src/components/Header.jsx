import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
const Header = () => {

    const navBarList = [
        { text: 'Home', link: '#home' },
        { text: 'About', link: '#about' },
        { text: 'Work', link: '#work' },
        { text: 'Contact', link: '#contact' }
    ]

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='fixed w-full z-999'>
            <div className='flex text-white px-5 md:px-10 md:py-5 py-2 max-md:bg-white/5 max-md:backdrop-blur-[3px] justify-between md:justify-normal items-center '>
                <div style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    <a className='text-2xl md:text-4xl' href="#home">PVN<span className='text-yellow-200'>.</span></a>
                </div>
                <div className='hidden sm:block absolute left-1/2 -translate-x-1/2'>
                    <ul className='hidden md:flex justify-center items-center h-15 rounded-lg bg-white/10 ' style={{ backdropFilter: 'blur(4px)' }} >
                        {
                            navBarList.map((nav) => (
                                <li key={nav.text} className='px-5 text-lg font-bold'>
                                    <a
                                        href={nav.link}
                                        className="relative inline-block text-white hover:text-yellow-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-yellow-200 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {nav.text}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex md:hidden justify-center items-center text-2xl'>
                    <button onClick={toggleMenu} className='absolute' >{!menuOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}</button>
                </div>
            </div>
            {/* dropdown */}
            <div className='grid grid-cols-5 text-yellow-200 mt-1'>
                <div></div>
                <ul className={`md:hidden ${menuOpen && ' border-white/10'} backdrop-blur-sm bg-white/5 text-center rounded-2xl col-span-3 leading-8`}>
                    {
                        menuOpen && (
                            navBarList.map((items, index) => (
                                <li key={items.text} className=''>
                                    <a href={items.link}>{items.text}</a>
                                </li>
                            ))
                        )
                    }
                </ul>
                <div></div>
            </div>
        </nav >
    )
}

export default Header