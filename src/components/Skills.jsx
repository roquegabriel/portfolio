import React from 'react'
import JavaScript from '../assets/images/javascript.svg'
import HTML from '../assets/images/html.svg'
import CSS from '../assets/images/css.svg'
import Java from '../assets/images/java.svg'
import PHP from '../assets/images/php.svg'
import MySQL from '../assets/images/mysql.svg'
import Spring from '../assets/images/spring.svg'
import ReactLogo from '../assets/images/react.svg'


const Skills = () => {
  return (
    <div name="skills" className='v-full h-screen bg-midnight text-gray-300 '>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'> Skills</p>
          <p className='py-5'>//These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={HTML} alt="HTML logo" className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={CSS} alt="CSS logo" className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between'>
            <img src={JavaScript} alt="JavaScript logo" className='w-20 mx-auto' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={PHP} alt="PHP logo" className='w-20 mx-auto' />
            <p className='my-4'>PHP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Java} alt="Java logo" className='w-20 mx-auto' />
            <p className='my-4'>Java</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={MySQL} alt="MySQL logo" className='w-20 mx-auto' />
            <p className='my-4'>MySQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Spring} alt="Spring logo" className='w-20 mx-auto' />
            <p className='my-4'>Spring Framework</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={ReactLogo} alt="React logo" className='w-20 mx-auto' />
            <p className='my-4'>React</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills