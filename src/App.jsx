import { useState } from 'react'
import './App.css'
import logo from './images/logo.svg'
import illustration from './images/illustration-working.svg'

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center font-display text-center">
      <div className='flex flex-row items-center justify-between px-5 mb-9'>
        <img src={logo} alt="logo"></img>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-9 stroke-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className='flex flex-col'>
        <img src={illustration} alt="illustration" className='w-[502px] h-[330px] object-cover object-left ml-4 mb-9'></img>
        <h1 className='font-bold text-[40px] leading-[46px] text-gray-950 mb-4'>More than just shorter links</h1>
        <p className='text-[18px] text-gray-500 px-5 mb-8'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <div>Get Started</div>
      </div>
    </div>
  )
}

export default App
