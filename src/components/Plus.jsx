/* Modules */
import React from "react"

/* Styles */
import '../styles/pages/Produits.css'

export default function Plus() {
    return (
        <div className="plus">
            <h2 className="plus_titre">Nos atouts</h2>
            <div className="plus_ensemble">
                <div className="plus_bloc">
                    <i className="fa-solid fa-people-carry-box fa-xl"></i>
                    <h3>Gestions des Livraisons</h3>
                </div>
                <div className="plus_bloc">
                    <i className="fa-solid fa-truck-fast fa-xl"></i>
                    <h3>Livraison partout en France</h3>
                </div>
                <div className="plus_bloc">
                    <i className="fa-solid fa-shop fa-xl"></i>
                    <h3>2 Showrooms pour vos yeux</h3>
                </div>
                <div className="plus_bloc">
                    <i className="fa-solid fa-mobile fa-xl"></i>
                    <h3>Commande par téléphone</h3>
                </div>
                <div className="plus_bloc">
                    <i className="fa-solid fa-book fa-xl"></i>
                    <h3>+10 000 références catalogue</h3>
                </div>
            </div>
        </div>
    )
};