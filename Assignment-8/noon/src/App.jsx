import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router_App } from './config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router_App/>
    </>
  )
}

export default App
