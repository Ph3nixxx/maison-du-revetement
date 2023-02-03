/* Modules */
import React from "react"
import { Link } from 'react-router-dom'

/* Images */
import Logo from "../assets/logo.png";

export default function Header() {
    return (
        <header className="header">
            <div className="header_nav">
                <nav className="header_gauche">
                    <div className="megamenu">
                        <button className="megamenu_bouton">Nos Produits
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                        <div className="categories">
                            <div className="categories_carrelage">
                                <Link to="/produits/carrelage">
                                    <h3>Carrelage</h3>
                                </Link>
                                <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                    <h4>Grès Cérame</h4>
                                </a>
                                <a href="/produits/parquet">
                                    <h4>Faïence Murale</h4>
                                </a>
                                <a href="/produits/parquet">
                                    <h4>Pierres Naturelles</h4>
                                </a>
                                <a href="/produits/parquet">
                                    <h4>Extérieur</h4>
                                </a>
                            </div>
                            <div className="categories_parquet">
                                <Link to="/produits/parquet">
                                    <h3>Parquet</h3>
                                </Link>
                                <a href="/produits/parquet">
                                    <h4>Massif</h4>
                                </a>
                                <a href="/produits/parquet">
                                    <h4>Contrecollé</h4>
                                </a>
                                <a href="/produits/parquet">
                                    <h4>Stratifié</h4>
                                </a>
                                <a href="/produits/parquet">
                                    <h4>PVC</h4>
                                </a>
                            </div>
                            <div className="categories_sanitaire">
                                <Link to="/produits/sanitaire">
                                    <h3>Sanitaire</h3>
                                </Link>
                                <a href="/produits/parquet">
                                    <h4>Robineterie</h4>
                                </a>
                                <a href="/produits/parquet">
                                    <h4>Meubles</h4>
                                </a>
                            </div>
                            <div className="categories_autre">
                                <Link to="/produits/autre">
                                    <h3>Autre</h3>
                                </Link>
                                <a href="/produits/parquet">
                                    <h4>Moulures</h4>
                                </a>
                                <a href="/produits/parquet">
                                    <h4>Poignets de Portes</h4>
                                </a>
                                <a href="/produits/parquet">
                                    <h4>Accessoires</h4>
                                </a>
                                <a href="/produits/parquet">
                                    <h4>Consommables</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Link to="/produits/parquet" className="conseils">Nos Conseils</Link>
                </nav>
                <div className="header_logo">
                    <Link to="/home">
                        <img src={Logo} alt="logo Maison du Revêtement"/>
                    </Link>
                </div>
                <div className="header_droite">
                    <div className="header_droite_onglets">
                        <a href="https://maisondurevetement.odoo.com/contact"><p>Nous<br />Contacter</p></a>
                    </div>
                    <div className="header_droite_icones">
                        <a href="#" className="recherche"><i className="fa-solid fa-magnifying-glass"></i></a>
                        <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/cart"><i className="fa-solid fa-cart-shopping fa-lg"></i></a>
                        <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/web/login"><i className="fa-solid fa-user fa-lg"></i></a>
                        <a href="tel:+33156555526"><i className="fa-solid fa-phone fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </header>
    )
}