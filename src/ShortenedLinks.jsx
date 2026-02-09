import { useState } from 'react'
import './App.css'

function ShortenedLinks ({link}) {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-bg-gray mb-21'>
      <div  className='flex flex-col justify-center items-center w-[327px] md:w-[1110px] bg-white rounded-xl'>
        <div className='text-gray-950 mt-[16px] mb-3'>{link}</div>
        <hr className='border-bg-gray border-1 w-full mb-3'/>
        <div className='text-primary-blue mb-2'>Shortened Link</div>
        <button className='w-[279px] h-[40px] md:w-[189px] md:h-[65px] rounded-md bg-primary-blue text-[18px] md:text-[20px] text-white font-bold md:mt-[52px] md:ml-6 cursor-pointer mb-[16px]'>Copy</button>
      </div>
    </div>
  )
}

export default ShortenedLinks 