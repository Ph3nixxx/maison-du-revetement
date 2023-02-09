/* Modules */
import React from 'react'
import { Link } from 'react-router-dom'

/* Components */
import Header from '../../components/Header'

/* Images */
import Illustration from '../../assets/404.svg'

/* Code */
export default function Error() {
  return (
    <>
        <Header />
        <div className='error'>
            <div className='error_title'>Oups...</div>
            <br />
            <img src={Illustration} alt="illustration pour indiquer une erreur de page" />
            <br />
            <div className='error_subtitle'>
                Il semblerait que la page que vous cherchez n’existe pas !
            </div>
            <button className="boutonPro"><Link to="/home">Page d'accueil</Link></button>
        </div>
    </>
    )
};