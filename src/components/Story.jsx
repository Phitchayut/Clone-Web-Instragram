import React from 'react'
import { story } from '../data'

function Story() {
  return (
    <div>
        <ul className='h-44 flex items-center text-sm lg:text-base md:text-base justify-center lg:justify-start md:justify-start space-x-8 lg:ml-32 md:ml-32 ml-0 font-semibold'>
            {story.map((item,id) => (
                <li key={id} className='w-24 flex flex-col items-center justify-center'>
                    <img className='w-14 h-14 rounded-full object-cover' src={item.img} alt={item.alt} />
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Story