/* Modules */
import React from "react"
import { Link } from 'react-router-dom'

/* Images */
import Logo from "../assets/logo3.gif";
import Video from "../assets/site.MOV";

export default function Header() { 
    return (
        <header className="header">
            <video src={Video} type="video/mov" muted loop ></video>
            <div className="header_nav">
                <nav className="header_gauche">
                    <div className="megamenu">
                        <button className="megamenu_button">Nos Produits
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                        <div className="categories">
                            <div className="categories_parquet">
                                <Link to="/produits/parquet">
                                    <h3>Parquet</h3>
                                </Link>
                                <a href="#">Massif</a>
                                <a href="#">Contrecollé</a>
                                <a href="#">Stratifié</a>
                                <a href="#">PVC</a>
                            </div>
                            <div className="categories_carrelage">
                                <a href="#"><h3>Carrelage</h3></a>
                                <a href="#">Sol</a>
                                <a href="#">Mural</a>
                                <a href="#">Mosaïque</a>
                                <a href="#">Pièces Spéciales</a>
                            </div>
                            <div className="categories_sanitaire">
                                <a href="#"><h3>Sanitaire</h3></a>
                                <a href="#">Robineterie</a>
                                <a href="#">Meubles Salle de Bain</a>
                            </div>
                        </div>
                    </div>
                    <a href="#">Nos Conseils</a>
                </nav>
                <div className="header_logo">
                    <Link to="/home">
                        <img src={Logo} alt="logo Maison du Revêtement"/>
                    </Link>
                </div>
                <div className="header_droite">
                    <div className="header_droite_onglets">
                        <a href="#">Nous Contacter</a>
                        <a href="#">Espace Client / Pro</a>
                    </div>
                    <div className="header_droite_icones">
                        <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                        <a href="#"><i className="fa-solid fa-user"></i></a>
                        <a href="tel:+33156555526"><i className="fa-solid fa-phone"></i></a>
                    </div>
                </div>
            </div>
        </header>
    )
}