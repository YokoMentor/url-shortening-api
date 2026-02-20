import React, { useState } from 'react'
import './App.css'

function DropDownMenu() {

  return (
  <div className='flex justify-center items-center relative'>
    <div className='flex flex-col justify-center items-center w-[328px] h-[383px] text-[20px] text-white font-bold bg-primary-purple rounded-md ml-[24px] mr-[24px] absolute top-0'>
      <div>Features</div>
      <div>Pricing</div>
      <div>Resources</div>
      <hr />
      <div>Login</div>
      <button className='w-[198px] h-[56px] rounded-full bg-primary-blue hover:bg-hover mb-28 cursor-pointer'>Sign up</button>
    </div>
  </div>
  )
}

export default DropDownMenu