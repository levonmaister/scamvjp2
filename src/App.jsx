import { useState } from 'react'
import Etusivu from './pages/Etusivu'
import Navbar from './components/Navbar'
import IlmoitusSivu from './pages/IlmoitusSivu'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'

function App() {


  return (
    <div>

<Routes>
  <Route path="/" element={<Etusivu />} />
  <Route path="/ilmoitus" element={<IlmoitusSivu />} />
</Routes>
</div>
  )
}


export default App
