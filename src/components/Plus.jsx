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
                    <i className="fa-solid fa-dolly fa-xl"></i>       
                    <h3>Retrait gratuit dans notre entrepôt de Villeneuve-la-Garenne</h3>
                </div>
                <div className="plus_bloc">
                    <i className="fa-solid fa-truck-fast fa-xl"></i>
                    <h3>Livraison partout en France</h3>
                </div>
                <div className="plus_bloc">
                    <i className="fa-solid fa-shop fa-xl"></i>
                    <h3>1 Showroom pour vos yeux</h3>
                </div>
                <div className="plus_bloc">
                    <i className="fa-solid fa-mobile fa-xl"></i>
                    <h3>Commande par téléphone</h3>
                </div>
                <div className="plus_bloc">
                    <i className="fa-solid fa-book fa-xl"></i>
                    <h3>+130 références en stock</h3>
                </div>
            </div>
        </div>
    )
};