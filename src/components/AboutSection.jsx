import React from 'react'
import ABOUT from '../assets/about.png'

const AboutSection = () => {
    return (
        <div id='about' className='text-white pt-15 sm:pt-0 p-5 md:p-10 lg:p-20'>
            <div>
                <h2 className='text-center text-yellow-200 text-xl'>ABOUT ME</h2>
            </div>
            <div className='grid md:grid-cols-2 py-10 lg:py-20 text-justify'>
                <div className=' md:p-5 text-xs sm:text-sm md:text-base text-gray-400 font-semibold leading-relaxed'>
                    <p className='mb-10'>
                        Hi there! I'm <span className='text-yellow-200'>Prithviraj V Nair</span>, a Full Stack Developer who loves
                        building powerful,
                        visually
                        appealing, and user-friendly web applications. With a strong foundation in React.js, Express.js,
                        and
                        Node.js, I enjoy crafting scalable solutions and bringing ideas to life.
                    </p>

                    <p>
                        Whether I’m tackling complex coding challenges or learning a new tech stack, I
                        approach
                        each day
                        with energy, curiosity, and purpose. I’m passionate about turning creative concepts into
                        real-world
                        applications that make a difference.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-full 2xl:w-100' src={ABOUT} alt="About Section Image" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection