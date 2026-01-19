import { useState } from 'react'
import './App.css'
import logo from './images/logo.svg'
import illustration from './images/illustration-working.svg'

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center font-display text-center">
      <div className='flex flex-row'>
        <img src={logo} alt="logo"></img>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div>
        <img src={illustration} alt="illustration"></img>
        <h1 className='font-bold text-lg text-gray-950'>More than just shorter links</h1>
        <p className='text-gray-500'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <div>Get Started</div>
      </div>
    </div>
  )
}

export default App
