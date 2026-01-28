import { useState } from 'react'
import './App.css'
import logo from './images/logo.svg'
import illustration from './images/illustration-working.svg'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import instagram from './images/icon-instagram.svg'

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center font-display text-center">
      <div className='flex flex-row justify-between px-5 mb-9 mt-10'>
        <img src={logo} alt="logo"></img>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-9 stroke-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className='flex flex-col items-center'>
      <div className='flex flex-col md:flex-row-reverse md:text-left'>
        <img src={illustration} alt="illustration" className='w-[502px] h-[330px] md:w-[737px] md:h-[484px] object-cover mb-9 object-left'></img>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[40px] md:text-[80px] leading-[46px] md:leading-[86px] text-gray-950 mb-4 md:mb-1 md:tracking-tight'>More than just shorter links</h1>
          <p className='text-[18px] md:text-[22px] text-gray-500 pl-5 pr-5 md:pl-0 md:pr-26 mb-8'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <div>Get Started</div>
        </div>
      </div>
      <div className='relative flex flex-col justify-center items-center mt-30'>
        <form className='flex flex-col justify-center items-center w-[327px] md:w-[1110px] h-[160px] md:h-[168px] bg-[url(./images/bg-shorten-mobile.svg)] md:bg-[url(./images/bg-shorten-desktop.svg)] bg-no-repeat bg-top-right bg-primary-purple rounded-xl absolute bottom'>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <label htmlFor="name" className='mb-2'></label>
            <input type="text" id="name" placeholder='Shorten a link here...'
            className='text-[16px] md:text-[20px] text-gray-700 w-[279px] h-[50px] md:w-[768px] md:h-[65px] rounded-md bg-white cursor-pointer pl-4 md:pl-8 md:font-bold'/>
            <button className='w-[279px] h-[48px] md:w-[189px] md:h-[65px] rounded-md bg-primary-blue text-[18px] md:text-[20px] text-white font-bold mt-4 md:mt-0 md:ml-6'>Shorten it!</button>
          </div>
        </form>
      </div>
      <div className='flex flex-col justify-center items-center bg-bg-gray pt-42 md:w-full'>
        <div className='px-5 mb-14 md:w-[550px] md:mt-9 md:mb-5'>
          <h2 className='font-bold text-[27px] md:text-[40px] text-gray-950 mb-5 md:mb-3 md:tracking-tight'>Advanced Statistics</h2>
          <p className='text-[16px] md:text-[18px] text-gray-500 leading-[28px]'>Track how your links are performing scross the web with out advanced statistics dashboard.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:w-[1110px] md:mb-30'>
          <div className='relative flex flex-col justify-center items-center w-[327px] h-[268px] bg-white rounded-md mt-8 md:mt-0 mb-14 md:mb-0 px-5'>
            <div className='bg-primary-purple bg-[url(./images/icon-brand-recognition.svg)] bg-no-repeat bg-center w-[89px] h-[89px] rounded-full absolute top-[-44px]'></div>
            <h3 className='font-bold text-[22px] text-gray-950 mb-4 mt-11'>Brand Recognition</h3>
            <p className='text-gray-500 text-[15px] leading-[27px]'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div className='relative flex flex-col justify-center items-center w-[327px] h-[268px] bg-white rounded-md mt-8 md:mt-22 mb-14 md:mb-0  px-5'>
            <div className='bg-primary-purple bg-[url(./images/icon-detailed-records.svg)] bg-no-repeat bg-center w-[89px] h-[89px] rounded-full absolute top-[-44px]'></div>
            <h3 className='font-bold text-[22px] text-gray-950 mb-4 mt-11'>Detailed Records</h3>
            <p className='text-gray-500 text-[15px] leading-[27px]'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
          <div className='relative flex flex-col justify-center items-center w-[327px] h-[268px] bg-white rounded-md mt-8 md:mt-42 mb-22 md:mb-0 px-5'>
            <div className='bg-primary-purple bg-[url(./images/icon-fully-customizable.svg)] bg-no-repeat bg-center w-[89px] h-[89px] rounded-full absolute top-[-44px]'></div>
            <h3 className='font-bold text-[22px] text-gray-950 mb-4 mt-11'>Fully Customizable</h3>
            <p className='text-gray-500 text-[15px] leading-[27px]'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
      <div className='bg-[url(./images/bg-boost-mobile.svg)] md:bg-[url(./images/bg-boost-desktop.svg)] bg-no-repeat bg-top-right bg-primary-purple h-[300px] w-full'>
        <h2 className='font-bold text-[27px] text-white mt-25 mb-5'>Boost your links today</h2>
        <div>Get Started</div>
      </div>
      <div className='bg-gray-950 w-full h-[776px] text-white pt-11'>
        <h2 className='font-bold text-[33px] mb-11'>Shortly</h2>
        <div>
          <div className='mb-10'>
            <h3 className='text-white text-[15px] mb-5'>Features</h3>
            <p className='text-gray-500 text-[15px] mb-3'>Link Shortening</p>
            <p className='text-gray-500 text-[15px] mb-3'>Branded Links</p>
            <p className='text-gray-500 text-[15px] mb-3'>Analytics</p>
          </div>
          <div className='mb-10'>
            <h3 className='text-white text-[15px] mb-5'>Resources</h3>
            <p className='text-gray-500 text-[15px] mb-3'>Blog</p>
            <p className='text-gray-500 text-[15px] mb-3'>Developers</p>
            <p className='text-gray-500 text-[15px] mb-3'>Support</p>
          </div>
          <div className='mb-10'>
            <h3 className='text-white text-[15px] mb-5'>Company</h3>
            <p className='text-gray-500 text-[15px] mb-3'>About</p>
            <p className='text-gray-500 text-[15px] mb-3'>Our Team</p>
            <p className='text-gray-500 text-[15px] mb-3'>Careers</p>
            <p className='text-gray-500 text-[15px] mb-3'>Contact</p>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <img src={facebook} alt="facebook" className='mr-6'></img>
            <img src={twitter} alt="twitter" className='mr-6'></img>
            <img src={pinterest} alt="pinterest" className='mr-6'></img>
            <img src={instagram} alt="instagram"></img>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
