import { useState } from 'react'
import './App.css'

function ShortenedLinks ({link}) {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-bg-gray mb-21'>
      <div  className='flex flex-col justify-center items-center w-[327px] md:w-[1110px] bg-white rounded-xl'>
        <div className='text-gray-950'>{link}</div>
        <div className='text-primary-blue'>Shortened Link</div>
        <button className='w-[279px] h-[48px] md:w-[189px] md:h-[65px] rounded-md bg-primary-blue text-[18px] md:text-[20px] text-white font-bold mt-4 md:mt-[52px] md:ml-6 cursor-pointer mb-[24px]'>Copy</button>
      </div>
    </div>
  )
}

export default ShortenedLinks 