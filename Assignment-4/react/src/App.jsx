import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Bannner from './components/banner'
import {Coding, Easy, Responsive} from './components/responsive'
import Testimonial from './components/testimonial'
import Contact from './components/contact'
import Footer from './components/footer'
import Bootstrap from './components/bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Bannner/>
    <Bootstrap/>
    <Responsive/>
    <Coding/>
    <Easy/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
