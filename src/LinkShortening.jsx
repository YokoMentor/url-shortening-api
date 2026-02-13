import { useState } from 'react'
import './App.css'

function LinkShortening ({link, shortenedLink}) {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-bg-gray mb-21'>
      <div  className='flex flex-col md:flex-row justify-center items-center w-[327px] md:w-[1110px] md:h-[72px] bg-white rounded-xl'>
        <div className='flex flex-col md:flex-row w-full px-6 text-left md:justify-between md:items-center md:text-[18px]'>
          <div className='text-gray-950 mt-[16px] md:mt-0 mb-3 md:mb-0'>{link}</div>
          <hr className='border-bg-gray border-1 md:border-0 w-full md:w-0 mb-3 md:mb-0'/>
          <div className='text-primary-blue mb-2 md:mb-0'>{shortenedLink}</div>
        </div>
        <button className='w-[279px] h-[40px] md:w-[120px] md:h-[40px] rounded-md bg-primary-blue text-[18px] md:text-[16px] text-white font-bold cursor-pointer mb-[16px] md:mb-0 md:mr-6'>Copy</button>
      </div>
    </div>
  )
}

export default LinkShortening 