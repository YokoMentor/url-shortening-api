import React, { useState } from 'react'
import './App.css'
import logo from './images/logo.svg'
import DropDownMenu from './DropDownMenu';

function Menu() {

  const [dropDownMenuIsVisible, setDropDownMenuIsVisible] = useState(false);

  function handleMenuClick(event) {
    event.preventDefault();
    if(!dropDownMenuIsVisible) {
      setDropDownMenuIsVisible(true);
    } else {
      setDropDownMenuIsVisible(false);
    }
  }

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='flex flex-row justify-between px-5 md:px-20 mb-8 md:mb-17 mt-10 md:mt-14 w-full md:w-[1110px]'>
          <div>
            <img src={logo} alt="logo"></img>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-9 stroke-gray-500" onClick={handleMenuClick}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
      {dropDownMenuIsVisible && <DropDownMenu/>}
    </div>
  )
}

export default Menu