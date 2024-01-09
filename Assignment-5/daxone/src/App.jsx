
import './App.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import Poster from './components/poster'
import ProductList1 from './components/productList1'
import ProductList2 from './components/productList2'
import Winter from './components/winter'
import Footer from './components/footer'
import { useState } from 'react'
import Modal from './components/modal'


function App() {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDataFromChild = (data) => {
    setData(data);
  };
  console.log(data,"bshgdis")
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
    {open ? 
    <>
    <Navbar/>
    <Modal isOpen={open} product={data} onClose={closeModal}/>
    </>
    :
    <>
    <Banner/>
    <Poster/>
    <ProductList1 sendData={handleDataFromChild} setOpen={setOpen}/>
    <Winter/>
    <ProductList2 sendData={handleDataFromChild} setOpen={setOpen}/>
    </>
  }
  <Footer/>
    </>
  )
}

export default App
