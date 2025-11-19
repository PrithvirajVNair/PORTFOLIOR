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
    return (
        <div id='work' className='pt-15 sm:pt-0 md:p-10 lg:p-20 text-white'>
            <div>
                <h2 className='text-center text-yellow-200 text-xl'>WORKS</h2>
                <h2 className='text-center text-gray-400 text-sm'>Featured Works</h2>
            </div>
            <div className='grid lg:grid-cols-2 p-5'>
                <div className='font-semibold'>
                    <h2 className='text-purple-200 text-xl md:text-3xl font-bold pt-20'>-APTIQ</h2>
                    <p className='text-gray-400 md:text-base text-xs'>APTIQ is an intelligent mobile application designed to help students and job seekers master
                        aptitude skills required for campus placements and competitive exams. The app combines
                        structured learning with AI-driven analytics to deliver a personalized, engaging, and scalable
                        learning experience.</p>
                    <h3 className='text-purple-200 mt-5 underline'>Key Features:</h3>
                    <ul className='text-gray-400 list-disc ps-5 md:text-base text-xs'>
                        <li>Interactive Video Lectures covering Quantitative Aptitude, Logical Reasoning, and Verbal
                            Ability.</li>
                        <li>AI-Based Performance Analysis using Decision Trees to classify users into Beginner, Amateur,
                            or Professional levels based on test results.</li>
                        <li>Practice Tests with adaptive difficulty based on user performance.</li>
                        <li>Dynamic Question Generation powered by BERT and Transformer models for endless practice
                            opportunities.</li>
                        <li>Career Prediction Engine using Support Vector Machines (SVM) to suggest suitable career
                            paths based on aptitude trends.</li>
                        <li>AI Chatbot for answering user queries and guiding through concepts.</li>
                        <li>Company-Specific Question Bank tailored to real-world placement papers.</li>
                    </ul>
                    <div className='grid grid-cols-4 lg:grid-cols-5 place-content-center py-5'>
                        <div className='flex border justify-center items-center rounded text-sm py-2 px-3 m-1 border-purple-200/10 bg-purple-200/20' style={{ backdropFilter: 'blur(4px)' }}>
                            <img src={DJ} style={{ width: '20px', height: '20px' }} alt="Django" />
                            <p className='sm:text-base text-[8px]'>DJANGO</p>
                        </div>
                        <div className='flex border justify-center items-center rounded text-sm py-2 px-3 m-1 border-purple-200/10 bg-purple-200/20' style={{ backdropFilter: 'blur(4px)' }}>
                            <img src={AS} style={{ width: '20px', height: '20px' }} alt="Django" />
                            <p className='sm:text-base text-[8px]'>ANDROID</p>
                        </div>
                        <div className='flex border justify-center items-center rounded text-sm py-2 px-3 m-1 border-purple-200/10 bg-purple-200/20' style={{ backdropFilter: 'blur(4px)' }}>
                            <img src={MYSQL} style={{ width: '20px', height: '20px' }} alt="Django" />
                            <p className='sm:text-base text-[8px]'>MySQL</p>
                        </div>
                        <div className='flex border justify-center items-center rounded text-sm py-2 px-3 m-1 border-purple-200/10 bg-purple-200/20' style={{ backdropFilter: 'blur(4px)' }}>
                            <img src={JAVA} style={{ width: '20px', height: '20px' }} alt="Django" />
                            <p className='sm:text-base text-[8px]'>JAVA</p>
                        </div>
                        <div className='flex border justify-center items-center rounded text-sm py-2 px-3 m-1 border-purple-200/10 bg-purple-200/20' style={{ backdropFilter: 'blur(4px)' }}>
                            <img src={PY} style={{ width: '20px', height: '20px' }} alt="Django" />
                            <p className='sm:text-base text-[8px]'>PYTHON</p>
                        </div>
                    </div>
                </div>
                <div className='border m-5 rounded border-purple-200/20 bg-purple-200/20 md:mt-20 justify-center flex items-center'>
                    <img className='rounded w-[100px] md:w-[200px] md:hover:w-[250px] transition-all duration-300 hover:shadow-lg md:hover:shadow-purple-200/50 md:p-0 p-5' src={W1} alt="" />
                </div>
            </div>


            <div className='grid lg:grid-cols-2 p-5'>
                <div className='hidden border m-5 rounded border-cyan-200/20 bg-cyan-200/20 mt-20 justify-center md:flex items-center'>
                    <img className='rounded w-[400px] hover:w-[450px] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200/50' src={W2} alt="" />
                </div>
                <div className='font-semibold'>
                    <h2 className='text-cyan-200 text-base md:text-3xl font-bold md:pt-20'>-SPEND SENSE</h2>
                    <p className='text-gray-400 text-xs md:text-base'>SpendSense is a modern expense tracking application built using the MERN stack, designed to help users manage their finances efficiently. The app offers an intuitive interface, real-time data handling, and insightful visualizations to promote better spending habits.</p>
                    <h3 className='text-cyan-200 mt-5 underline'>Key Features:</h3>
                    <ul className='text-gray-400 list-disc ps-5 text-xs md:text-base'>
                        <li>Expense & Income Tracking.</li>
                        <li>Interactive Data Visualization.</li>
                        <li>Category Management.</li>
                        <li>Persistent Data Storage.</li>
                        <li>Responsive UI.</li>
                    </ul>
                    <div className='flex flex-wrap py-5'>
                        <div className='flex border justify-center items-center rounded text-sm py-2 px-3 m-1 border-cyan-200/10 bg-cyan-200/20' style={{ backdropFilter: 'blur(4px)' }}>
                            <img src={MDB} style={{ width: '20px', height: '20px' }} alt="Django" />
                            <p className='sm:text-base text-[6px]'>MongoDB</p>
                        </div>
                        <div className='flex border justify-center items-center rounded text-sm py-2 px-3 m-1 border-cyan-200/10 bg-cyan-200/20' style={{ backdropFilter: 'blur(4px)' }}>
                            <img src={EJS} style={{ width: '20px', height: '20px' }} alt="Django" />
                            <p className='sm:text-base text-[6px]'>ExpressJS</p>
                        </div>
                        <div className='flex border justify-center items-center rounded text-sm py-2 px-3 m-1 border-cyan-200/10 bg-cyan-200/20' style={{ backdropFilter: 'blur(4px)' }}>
                            <img src={RJS} style={{ width: '20px', height: '20px' }} alt="Django" />
                            <p className='sm:text-base text-[6px]'>ReactJS</p>
                        </div>
                        <div className='flex border justify-center items-center rounded text-sm py-2 px-3 m-1 border-cyan-200/10 bg-cyan-200/20' style={{ backdropFilter: 'blur(4px)' }}>
                            <img src={NJS} style={{ width: '20px', height: '20px' }} alt="Django" />
                            <p className='sm:text-base text-[6px]'>NodeJS</p>
                        </div>
                    </div>
                </div>
                <div className='md:hidden border m-5 rounded border-cyan-200/20 bg-cyan-200/20 md:mt-20 justify-center flex items-center'>
                    <img className='p-5 rounded w-[400px] hover:w-[450px] transition-all duration-300 hover:shadow-lg md:hover:shadow-cyan-200/50' src={W2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WorkSection