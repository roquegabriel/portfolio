import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div name="home" className='bg-midnight w-full h-screen'>
      <div className='max-w-[1000px] h-full mx-auto flex flex-col justify-center px-8'>
        <p className='text-pink-600 font-bold'>Hi there, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-fog'>Roque Pérez</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-lightslategray'>I'm a Full Stack Developer</h2>
        <p className='text-lightslategray py-4 max-w-[700px]'>I'm a full stack developer with a passion for building intuitive and robust web solutions. Let's bring your vision to life with cutting-edge technology and innovative design.</p>
        <div>
          <Link to='works' smooth={true} className='group text-white border-2 px-6 py-3 my-2 inline-flex items-center hover:bg-pink-600 hover:border-pink-600 cursor-pointer'>View works <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home