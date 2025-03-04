import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PokeView from './pages/pokemon_view'
import PageError from './pages/404_page'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokeView/>} />
        <Route path='*' element={<PageError/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
