import React from 'react'
import HTML from '../assets/icons8-html-480.png'
import CSS from '../assets/icons8-css-480.png'
import TW from '../assets/icons8-tailwind-css-480.png'
import BS from '../assets/icons8-bootstrap-480.png'
import JS from '../assets/icons8-javascript-480 (1).png'
import NJS from '../assets/icons8-node-js-480.png'
import RJS from '../assets/icons8-react-480.png'
import GIT from '../assets/icons8-git-480.png'
import GitHub from '../assets/icons8-github-480.png'
import PY from '../assets/icons8-python-480 (1).png'
import JAVA from '../assets/icons8-java-480.png'
import C from '../assets/icons8-c-programming-480 (1).png'
import MYSQL from '../assets/icons8-mysql-480.png'
import MDB from '../assets/icons8-mongodb-480.png'
import JIRA from '../assets/icons8-jira-480.png'
import AJS from '../assets/icons8-angular-480.png'
import MUI from '../assets/icons8-material-ui-480.png'
import GlowCard from './GlowCard'

const SkillsSection = () => {

    const skills = [
        { PIC: HTML, name: 'HTML' },
        { PIC: CSS, name: 'CSS' },
        { PIC: TW, name: 'Tailwind' },
        { PIC: BS, name: 'Bootstrap' },
        { PIC: JS, name: 'JavaScript' },
        { PIC: NJS, name: 'NodeJS' },
        { PIC: RJS, name: 'ReactJS' },
        { PIC: GIT, name: 'Git' },
        { PIC: GitHub, name: 'Github' },
        { PIC: PY, name: 'Python' },
        { PIC: JAVA, name: 'Java' },
        { PIC: C, name: 'C' },
        { PIC: MYSQL, name: 'MySQL' },
        { PIC: MDB, name: 'MongoDB' },
        { PIC: JIRA, name: 'Jira' },
        { PIC: AJS, name: 'AngularJS' },
        { PIC: MUI, name: 'Material UI' },
    ]

    return (
        <div className='px-2 md:py-10 lg:p-20 pt-15 sm:pt-0 text-white'>
            <div>
                <h2 className='text-center text-yellow-200 text-xl'>SKILLS</h2>
                <h3 className='text-center text-gray-400 text-sm'>Tools & Tech</h3>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 py-10'>
                {
                    skills.map((skill) => (
                        <GlowCard key={skill.name}>
                            <div className='flex flex-col items-center justify-center py-1 text-[9px] md:text-sm lg:text-md'>
                                <div>
                                    <img className='px-6' src={skill.PIC} alt={`${skill.name} logo`} />
                                </div>
                                <p className='p-1'>{skill.name}</p>
                            </div>
                        </GlowCard>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillsSection



// skills.map((skill) => (
//                         <GlowCard key={skill.name} className='flex flex-col items-center border border-white/50 m-3 rounded bg-white/10 py-1  hover:text-yellow-200 hover:shadow-lg hover:shadow-yellow-200/30 text-[9px] sm:text-sm lg:text-base aspect-5/4' style={{backdropFilter:'blur(3px)'}}>
//                             <div>
//                                 <img className='px-6' src={skill.PIC} alt="" />
//                             </div>
//                             <p className='p-1'>{skill.name}</p>
//                         </GlowCard>
//                     ))