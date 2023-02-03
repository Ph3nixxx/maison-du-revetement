/* Modules */
import React from "react"

/* Styles */
import '../styles/pages/Produits.css'
import '../styles/autre/Autre.css'

/* Code */

export default function Produits({pdt, txt}) {
    return (
        <div className="produits_conteneur">
            <h1>{pdt}</h1>
            <span className="produits_conteneur_ligne"></span>
            <h3>{txt}</h3>
        </div>
    )
};