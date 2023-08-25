import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import './scss/app.scss'
import Home from './pages/Home'
import DetailCountry from './pages/DetailCountry'
import NotFound from './pages/NotFound'




const App: React.FC = () => {

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:name' element={<DetailCountry />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>

  )
}

export default App