import React from 'react'
import Buttons from '../components/Buttons'
import portCover from '../assets/portfolio-cover.png';

const Projects = () => {

  return (
    <div name="projects" className='w-full h-screen md:h-full mt-[20rem] lg:mt-0 landscape:mt-[30rem] mb-[20rem]'>
      <div className='max-w-[1000px] h-full mx-auto lg:px-0 flex flex-col justify-center space-y-10'>
        <div className='space-y-8'>
          <p className='text-4xl md:text-5xl lg:text-6xl font-bold inline border-b-4 border-b-[#000080] dark:border-b-[#37cdbe]'>Projects</p>
          <p className='text-lg lg:text-xl font-bold'>
            Projects I worked on</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 text-center md:text-left items-center justify-center gap-y-8 md:gap-x-8'>
          <div className='w-[300px] items-center justify-center space-y-4'>
            <img alt="portfolio-project" src={portCover} 
            className='border-2 rounded-2xl w-[300px] h-auto hover:scale-150 transition-all duration-300'/>
            <p>This portfolio</p>
            <p>Description</p>
            <Buttons style='float-left'>View Code</Buttons>
            <button className='border-2 py-2 px-4 border-gray-500 bg-gray-500 float-right rounded-lg text-white' disabled>View Demo</button>
          </div>
          <div className='w-[300px] items-center justify-center space-y-4'>
          <img alt="portfolio-project" src={portCover} 
            className='border-2 rounded-2xl w-[300px] h-auto hover:scale-150 transition-all duration-300'/>
            <p>Project 2</p>
            <p>Description</p>
            <div className=''>
              <Buttons style='float-left'>View Code</Buttons>
              <Buttons style='float-right'>View Demo</Buttons>
            </div>
          </div>
          <div className='w-[300px] items-center justify-center space-y-4'>
            <img alt="portfolio-project" src={portCover} 
            className='border-2 rounded-2xl w-[300px] h-auto hover:scale-150 transition-all duration-300'/>
            <p>Project 3</p>
            <p>Description</p>
              <Buttons style='float-left'>View Code</Buttons>
              <Buttons style='float-right'>View Demo</Buttons>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects