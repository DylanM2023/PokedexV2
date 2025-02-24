import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PokeView from './pages/pokemon_view'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<PokeView/>} />
        <Route path='*' element={<div>404 No Page Found</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
