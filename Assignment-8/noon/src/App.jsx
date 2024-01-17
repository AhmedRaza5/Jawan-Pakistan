import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import Category from './components/category'
import ProductSection from './components/productSection'
import Deal from './components/deal'
import Trending from './components/trending'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Banner/>
  <Category/>
  <ProductSection/>
  <Deal/>
  <Trending/>
  <Footer/>
    </>
  )
}

export default App
