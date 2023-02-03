/* Modules */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Pages */
import Home from './pages/Home'
import Parquet from './pages/produits/Parquet'
import Livraison from './pages/autre/Livraison'
import CGV from './pages/autre/CGV'
import Erreur from './pages/autre/Erreur'

/* Components */
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

/* Styles */
import './styles/index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route index element={<Home />} />

      <Route path="/home" element={<Home />} />
      <Route path="/produits/parquet" element={<Parquet />} />

      <Route path="/livraison-et-retour" element={<Livraison />}/>
      <Route path="/conditions-generales-de-vente" element={<CGV />}/>

      <Route path="*" element= {<Erreur />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)