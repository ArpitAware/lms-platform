import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CoursesListing from './pages/CoursesListing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CoursesListing/>
    </>
  )
}

export default App
