import React from 'react'
import { navToggle } from '../data'

function Toggle() {
  return (
    <div>
        <ul className='flex flex-wrap justify-center mt-5 space-x-10'>
            {navToggle.map((item,index) => (
                <li className='flex justify-center'>
                    <a href="#" className={`flex items-center uppercase lg:mt-0 md:mt-0 mt-5 justify-center ${item.hover} duration-200 ease-in-out`}>
                        {item.icons} <p className='ml-2'>{item.name}</p>
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Toggle