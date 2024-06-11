import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Header from './components/Header'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import About2 from './components/About2'
import Classes from './components/Classes'
import Footer from './components/Footer'
import Pricing from './components/Pricing'

function App() {

  return (
   
      <div className="app">
        <Navbar/>
        <Routes>
           <Route path='/' element={<><Header/><About2/> <Classes/> <Pricing/> <Footer/>
           </>}></Route>

        </Routes>
        
        
      </div>
   
  )
}

export default App
