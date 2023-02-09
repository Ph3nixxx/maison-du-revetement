/* Modules */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Pages */
import Home from './pages/Home'
import Carrelage from './pages/produits/Carrelage'
import Parquet from './pages/produits/Parquet'
import Sanitaire from './pages/produits/Sanitaire'
import Livraison from './pages/autre/Livraison'
import CGV from './pages/autre/CGV'
import MentionsLegales from './pages/autre/MentionsLegales'
import Simulateur from './pages/autre/Simulateur'
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

      <Route path="/produits/carrelage" element={<Carrelage />} />
      <Route path="/produits/parquet" element={<Parquet />} />
      <Route path="/produits/sanitaire" element={<Sanitaire />} />

      <Route path="/livraison-et-retour" element={<Livraison />}/>
      <Route path="/conditions-generales-de-vente" element={<CGV />}/>
      <Route path="/mentions-légales" element={<MentionsLegales />}/>
      <Route path="/simulateur-3D" element={<Simulateur />}/>

      <Route path="*" element= {<Erreur />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)