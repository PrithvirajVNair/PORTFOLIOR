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
import DJ from '../assets/icons8-django-480.png'
import AS from '../assets/icons8-android-studio-480.png'
import W1 from '../assets/login.jpg'
import EJS from '../assets/icons8-express-js-480.png'
import W2 from '../assets/Screenshot 2025-08-08 131856.png'



const WorkSection = () => {

    const work = [
        {
            img: W1,
            title: '-APTIQ',
            description: 'APTIQ is an intelligent mobile application designed to help students and job seekers master aptitude skills required for campus placements and competitive exams. The app combines structured learning with AI-driven analytics to deliver a personalized, engaging, and scalable learning experience.',
            kftitle: 'Key Features:',
            kf: [
                'Interactive Video Lectures covering Quantitative Aptitude, Logical Reasoning, and Verbal Ability.',
                'AI-Based Performance Analysis using Decision Trees to classify users into Beginner, Amateur, or Professional levels based on test results.',
                'Practice Tests with adaptive difficulty based on user performance.',
                'Dynamic Question Generation powered by BERT and Transformer models for endless practice opportunities.',
                'Career Prediction Engine using Support Vector Machines (SVM) to suggest suitable career paths based on aptitude trends.',
                'AI Chatbot for answering user queries and guiding through concepts.',
                'Company-Specific Question Bank tailored to real-world placement papers.'
            ],
            techstack: [
                {
                    timg: DJ,
                    ttitle: "Django"
                },
                {
                    timg: AS,
                    ttitle: "Android"
                },
                {
                    timg: MYSQL,
                    ttitle: "MySQL"
                },
                {
                    timg: JAVA,
                    ttitle: "Java"
                },
                {
                    timg: PY,
                    ttitle: "Python"
                },
            ],
            textTheme: 'text-purple-200',
            bgTheme: 'bg-purple-200/20',
            bTheme: 'text-purple-200/10',
            shadow: 'shadow-purple-200/50',
            imgWidth: 'w-[200px]',
            hImgWidth: 'hover:w-[240px]',
            mImgWidth: 'w-[100px]',
        },
        {
            img: W2,
            title: '-SPEND SENSE',
            description: 'SpendSense is a modern expense tracking application built using the MERN stack, designed to help users manage their finances efficiently. The app offers an intuitive interface, real-time data handling, and insightful visualizations to promote better spending habits.',
            kftitle: 'Key Features:',
            kf: [
                'Expense & Income Tracking.',
                'Interactive Data Visualization.',
                'Category Management.',
                'Persistent Data Storage.',
                'Responsive UI.'
            ],
            techstack: [
                {
                    timg: MDB,
                    ttitle: "MongoDB"
                },
                {
                    timg: EJS,
                    ttitle: "ExpressJS"
                },
                {
                    timg: RJS,
                    ttitle: "ReactJS"
                },
                {
                    timg: NJS,
                    ttitle: "NodeJS"
                },
            ],
            textTheme: 'text-cyan-200',
            bgTheme: 'bg-cyan-200/20',
            bTheme: 'text-cyan-200/10',
            shadow: 'shadow-cyan-200/50',
            imgWidth: 'w-[400px]',
            hImgWidth: 'hover:w-[450px]'
        },
    ]

    return (
        <div id='work' className='pt-15 sm:pt-0 md:p-10 lg:p-20 text-white'>
            <div>
                <h2 className='text-center text-yellow-200 text-xl'>WORKS</h2>
                <h3 className='text-center text-gray-400 text-sm'>Featured Works</h3>
            </div>
            <div className='grid lg:grid-cols-2 p-5'>
                {
                    work.map((item, index) => (
                        index % 2 == 0 ?
                            <React.Fragment key={index}>
                                <div className='font-semibold'>
                                    <h2 className={`${item.textTheme} text-base md:text-3xl font-bold pt-10 md:pt-20`}>{item.title}</h2>
                                    <p className='text-gray-400 text-xs md:text-base'>{item.description}</p>
                                    <h3 className={`${item.textTheme} mt-5 underline`}>{item.kftitle}</h3>
                                    <ul className='text-gray-400 list-disc ps-5 text-xs md:text-base'>
                                        {
                                            item.kf.map((keyF, index) => (
                                                <li key={index}>{keyF}</li>
                                            ))
                                        }
                                    </ul>
                                    <div className='flex flex-wrap py-5'>
                                        {
                                            item.techstack.map((tech, index) => (
                                                <div className='flex justify-center items-center rounded text-sm py-2 px-3 m-1 bg-white/10' style={{ backdropFilter: 'blur(4px)' }}>
                                                    <img src={tech.timg} style={{ width: '20px', height: '20px' }} alt="Django" />
                                                    <p className='sm:text-base text-[6px]'>{tech.ttitle}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={`hidden border m-5 rounded ${item.bTheme} ${item.bgTheme} mt-20 justify-center md:flex items-center backdrop-blur-[1px]`}>
                                    <img className={`rounded ${item.imgWidth} ${item.hImgWidth} transition-all duration-300 hover:shadow-lg ${item.shadow}`} src={item.img} alt="Project Cover Image" />
                                </div>
                                <div className={`md:hidden border m-5 rounded ${item.bTheme} ${item.bgTheme} md:mt-20 justify-center flex items-center backdrop-blur-[1px]`}>
                                    <img className={`p-5 rounded ${item.mImgWidth}`} src={item.img} alt="Project Cover Image" />
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment key={index}>
                                <div className={`hidden border m-5 rounded ${item.bTheme} ${item.bgTheme} mt-20 justify-center md:flex items-center backdrop-blur-[1px]`}>
                                    <img className={`rounded ${item.imgWidth} ${item.hImgWidth} transition-all duration-300 hover:shadow-lg ${item.shadow}`} src={item.img} alt="Project Cover Image" />
                                </div>
                                <div className='font-semibold'>
                                    <h2 className={`${item.textTheme} text-base md:text-3xl font-bold pt-10 md:pt-20`}>{item.title}</h2>
                                    <p className='text-gray-400 text-xs md:text-base'>{item.description}</p>
                                    <h3 className={`${item.textTheme} mt-5 underline`}>{item.kftitle}</h3>
                                    <ul className='text-gray-400 list-disc ps-5 text-xs md:text-base'>
                                        {
                                            item.kf.map((keyF, index) => (
                                                <li key={index}>{keyF}</li>
                                            ))
                                        }
                                    </ul>
                                    <div className='flex flex-wrap py-5'>
                                        {
                                            item.techstack.map((tech, index) => (
                                                <div className='flex justify-center items-center rounded text-sm py-2 px-3 m-1 bg-white/10' style={{ backdropFilter: 'blur(4px)' }}>
                                                    <img src={tech.timg} style={{ width: '20px', height: '20px' }} alt="Django" />
                                                    <p className='sm:text-base text-[6px]'>{tech.ttitle}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={`md:hidden border m-5 rounded ${item.bTheme} ${item.bgTheme} md:mt-20 justify-center flex items-center backdrop-blur-[1px]`}>
                                    <img className={`p-5 rounded ${item.mImgWidth}`} src={item.img} alt="Project Cover Image" />
                                </div>
                            </React.Fragment>
                    ))}
            </div>
        </div>
    )
}

export default WorkSection