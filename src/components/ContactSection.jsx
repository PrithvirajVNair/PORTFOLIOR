import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContactSection = () => {
    return (
        <div id='contact' className='h-screen flex flex-col items-center justify-center'>
            <div>
                <h2 className='text-center text-yellow-200 text-xl'>CONTACT</h2>
            </div>
            <div className='py-5'>
                <a href="https://www.linkedin.com/in/prithvirajvnair" target='_blank' className='text-white text-2xl border p-1 rounded mx-2 hover:bg-yellow-200 hover:text-black'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/PrithvirajVNair" target='_blank' className='text-white text-2xl border p-1 rounded mx-2 hover:bg-yellow-200 hover:text-black'><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://x.com/PrithvirajVNair" target='_blank' className='text-white text-2xl border p-1 rounded mx-2 hover:bg-yellow-200 hover:text-black'><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="mailto:prithvirajvnair.pvr@gmail.com" className='text-white text-2xl border p-1 rounded mx-2 hover:bg-yellow-200 hover:text-black'><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </div>
    )
}

export default ContactSection