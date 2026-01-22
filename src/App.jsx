import { useState } from 'react'
import './App.css'
import logo from './images/logo.svg'
import illustration from './images/illustration-working.svg'

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center font-display text-center">
      <div className='flex flex-row justify-between px-5 mb-9'>
        <img src={logo} alt="logo"></img>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-9 stroke-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col'>
        <img src={illustration} alt="illustration" className='w-[502px] h-[330px] object-cover object-center object-[-18%] mb-9'></img>
        <h1 className='font-bold text-[40px] leading-[46px] text-gray-950 mb-4'>More than just shorter links</h1>
        <p className='text-[18px] text-gray-500 px-5 mb-8'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <div>Get Started</div>
      </div>
      <div className='relative flex flex-col justify-center items-center mt-30'>
        <form className='flex flex-col justify-center items-center w-[327px] h-[160px] bg-primary-purple rounded-xl absolute bottom'>
          <div className='flex flex-col'>
            <label htmlFor="name" className='mb-2'></label>
            <input type="text" id="name" placeholder='Shorten a link here...'
            className='text-[16px] text-gray-700 w-[279px] h-[50px] rounded-md bg-white cursor-pointer pl-4'/>
            <button className='w-[279px] h-[48px] rounded-md bg-primary-blue text-[18px] text-white font-bold mt-4'>Shorten it!</button>
          </div>
        </form>
      </div>
      <div className='flex flex-col bg-bg-gray pt-42'>
        <div className='px-5 mb-14'>
          <h2 className='font-bold text-[27px] text-gray-950 mb-5'>Advanced Statistics</h2>
          <p className='text-[16px] text-gray-500 leading-[28px]'>Track how your links are performing scross the web with out advanced statistics dashboard.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='relative flex flex-col justify-center items-center w-[327px] h-[268px] bg-white rounded-md mt-8 mb-14 px-5'>
            <div className='bg-primary-purple bg-[url(./images/icon-brand-recognition.svg)] bg-no-repeat bg-center w-[89px] h-[89px] rounded-full absolute top-[-44px]'></div>
            <h3 className='font-bold text-[22px] text-gray-950 mb-4 mt-11'>Brand Recognition</h3>
            <p className='text-gray-500 text-[15px] leading-[27px]'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div className='relative flex flex-col justify-center items-center w-[327px] h-[268px] bg-white rounded-md mt-8 mb-14 px-5'>
            <div className='bg-primary-purple bg-[url(./images/icon-detailed-records.svg)] bg-no-repeat bg-center w-[89px] h-[89px] rounded-full absolute top-[-44px]'></div>
            <h3 className='font-bold text-[22px] text-gray-950 mb-4 mt-11'>Detailed Records</h3>
            <p className='text-gray-500 text-[15px] leading-[27px]'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
          <div className='relative flex flex-col justify-center items-center w-[327px] h-[268px] bg-white rounded-md mt-8 mb-22 px-5'>
            <div className='bg-primary-purple bg-[url(./images/icon-fully-customizable.svg)] bg-no-repeat bg-center w-[89px] h-[89px] rounded-full absolute top-[-44px]'></div>
            <h3 className='font-bold text-[22px] text-gray-950 mb-4 mt-11'>Fully Customizable</h3>
            <p className='text-gray-500 text-[15px] leading-[27px]'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
