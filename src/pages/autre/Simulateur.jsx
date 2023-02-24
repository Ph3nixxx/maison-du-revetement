/* Modules */
import React from "react"
import { Link } from 'react-router-dom'

/* Components */
import Header from '../../components/Header'

/* Code */
export default function Simulateur() {
    return (
        <>
            <header className="header header_simulateur">
                <Header />
            </header>
            <section className="simulateur">
                <div className="construction">
                    <h2>Cette page est en cours de construction</h2>
                    <p>Notre site proposera très prochainement un simulateur 3D. Vous aurez la possibilité de tester toutes vos envies dans nos décors  !</p>
                    <p>Nous vous remercions pour votre patience.</p>
                    <button className="boutonPro"><Link to="/home">Page d'accueil</Link></button>
                </div>
            </section>
        </>
    )
}