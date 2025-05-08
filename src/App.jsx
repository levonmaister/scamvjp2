import { useState } from 'react'
import Etusivu from './pages/Etusivu'
import Navbar from './components/Navbar'
import IlmoitusSivu from './pages/IlmoitusSivu'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import Peli from './components/Peli'

function App() {


  return (
    <div className= "App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Etusivu />} />
        <Route path="/ilmoitus" element={<IlmoitusSivu />} />
        <Route path="/peli" element={<Peli />} />
      </Routes>
    </div>
  )
}


export default App
