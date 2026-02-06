import { useState } from 'react'
import './App.css'

function ShortenedLinks ({link}) {
  return (
    <div className='text-error-red absolute'>
      Hello {link}
    </div>
  )
}

export default ShortenedLinks 