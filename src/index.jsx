/* Modules */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Pages */
import Home from './pages/Home'

/* Components */
import Header from './components/Header'
import Footer from './components/Footer'

/* Styles */
import './styles/index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)