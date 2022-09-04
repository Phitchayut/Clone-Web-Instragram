import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// components
import Nav from './components/Nav'
import UserInfo from './components/UserInfo'
import Story from './components/Story'
import Toggle from './components/Toggle'
import Post from './components/Post'

function App() {

  return (
    <div>
        <Nav />
        <div className='w-full lg:w-[60rem] md:w-[60rem] mx-auto '>
          <UserInfo/>
          <Story />
          <hr />
          <Toggle />
          <Post />
        </div>
    </div>
  )
}

export default App
