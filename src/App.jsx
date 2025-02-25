import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PokeView from './pages/pokemon_view'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokeView/>} />
        <Route path='*' element={<div>Page Not Found...</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
