import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// components
import Nav from './components/Nav'
import UserInfo from './components/UserInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Nav />
        <UserInfo/>
    </div>
  )
}

export default App
