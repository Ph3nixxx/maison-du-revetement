/* Modules */
import React from 'react'

/* Components */
import Header from '../../components/Header'

/* Images */
import Illustration from '../../assets/404.svg'

/* Code */
export default function Error() {
  return (
    <>
        <Header />
        <div className='error_wrapper'>
            <div className='error_title'>Oups...</div>
            <br />
            <img src={Illustration} alt="illustration pour indiquer une erreur de page" />
            <br />
            <div className='error_subtitle'>
                Il semblerait que la page que vous cherchez n’existe pas !
            </div>
        </div>
    </>
    )
};