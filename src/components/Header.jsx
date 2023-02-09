/* Modules */
import React from "react"
import { Link } from 'react-router-dom'

/* Images */
import Logo from "../assets/mdr_logo2.png";

export default function Header() {
    return (
        <header className="header">
            <div className="header_nav">
                <nav className="header_gauche">
                    <div className="header_gauche_icones">
                        <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/cart"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/maison_du_revetement/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="mailto:support@maisondurevetement.com"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                    <div className="header_gauche_megamenu">
                        <div className="header_gauche_megamenu_carrelage">
                            <button className="bouton_carrelage">
                                <Link to="/produits/carrelage">
                                    <h2>Nos<br />Carrelages</h2>
                                </Link>
                            </button>
                            <div className="categories_carrelage">
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Sol & Mur</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Les Formats XXL</a></li>
                                        <li><a href="/produits/parquet">
                                            Imitation Terrazzo</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Hexagonales</a></li>
                                        <li><a href="/produits/parquet">
                                            Imitation Marbre</a></li>
                                    </ul>
                                    <ul>
                                        <li className="li_un"><a href="/produits/parquet">
                                            Imitation Bois</a></li>
                                        <li><a href="/produits/parquet">
                                            Imitation Carreaux de Ciment</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Bétons Cirés</a></li>
                                        <li><a href="/produits/parquet">
                                            Imitation Pierre</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Les Faïences Murales</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Les Pièces Architectes</a></li>
                                        <li><a href="/produits/parquet">
                                            3D / Les Reliefs</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Coordonnées Sol et Murs</a></li>
                                    </ul>
                                    <ul>
                                        <li className="li_un"><a href="/produits/parquet">
                                            Les Motifs</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Unis</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Les Extérieurs</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Les Fortes Épaisseurs</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Antidérapants</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Piscines</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Pavés</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Pierres Naturelles</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Les Terrazzos</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Travertins</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Tomettes</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Ardoises</a></li>
                                    </ul>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Les Carreaux de Ciment</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Zelliges</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Marbres</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Les Mosaïques</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Hexagonal</a></li>
                                        <li><a href="/produits/parquet">
                                            Verre</a></li>
                                        <li><a href="/produits/parquet">
                                            Cérame</a></li>
                                        <li><a href="/produits/parquet">
                                            Pierre & Marbre</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Accessoires Carrelage</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Plinthes</a></li>
                                        <li><a href="/produits/parquet">
                                            Colle</a></li>
                                        <li><a href="/produits/parquet">
                                            Joints</a></li>
                                        <li><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Croisillons</a></li>
                                        <li><a href="/produits/parquet">
                                            Produits d'entretien</a></li>
                                        <li><a href="/produits/parquet">
                                            Ragréages et primaires</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header_gauche_megamenu_parquet">
                            <button className="bouton_parquet">
                                <Link to="/produits/parquet">
                                    <h2>Nos<br />Parquets</h2>
                                </Link>
                            </button>
                            <div className="categories_parquet">
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Massif</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Les Bruts</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Huilés</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Vernis</a></li>
                                    </ul>
                                    <ul>
                                        <li className="li_un"><a href="/produits/parquet">
                                            Les Géométriques</a></li>
                                        <li><a href="/produits/parquet">
                                            Point de Hongrie</a></li>
                                        <li><a href="/produits/parquet">
                                            Dalle Versailles</a></li>
                                        <li><a href="/produits/parquet">
                                            Bâton Rompu</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Contrecollé</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Les Huilés</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Vernis</a></li>
                                        <li><a href="/produits/parquet">
                                            Les Géométriques</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Stratifié & PVC</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Les Stratifiés</a></li>
                                        <li><a href="/produits/parquet">
                                            Les PVC</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Accessoires Parquet</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Plinthes</a></li>
                                        <li><a href="/produits/parquet">
                                            Colle</a></li>
                                        <li><a href="/produits/parquet">
                                            Ragréages et primaires</a></li>
                                        <li><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Sous-couche et isolation</a></li>
                                        <li><a href="/produits/parquet">
                                            Produits d'entretien</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>              
                        <div className="header_gauche_megamenu_sanitaire">
                            <button className="bouton_sanitaire">
                                <Link to="/produits/sanitaire">
                                    <h2>Le<br />Sanitaire</h2>
                                </Link>
                            </button>
                            <div className="categories_sanitaire">
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Lavabo</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Robinet mitigeur à encastrer</a></li>
                                        <li><a href="/produits/parquet">
                                            Robinet mitigeur sur plan</a></li>
                                        <li><a href="/produits/parquet">
                                            Robinet mitigeur thermostatique</a></li>
                                    </ul>
                                    <ul>
                                        <li className="li_un"><a href="/produits/parquet">
                                            Robinet mélangeur</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Baignoire</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Robinet monocommande à encastrer</a></li>
                                        <li><a href="/produits/parquet">
                                            Robinet monocommande sur gorge</a></li>

                                    </ul>
                                    <ul>
                                        <li className="li_un"><a href="/produits/parquet">
                                            Robinet mitigeur thermostatique</a></li>
                                        <li><a href="/produits/parquet">
                                            Robinet mitigeur pour bidet</a></li>
                                    </ul>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Colonne de baignoire au sol</a></li>
                                        <li><a href="/produits/parquet">
                                            Douchette</a></li>
                                        <li><a href="/produits/parquet">
                                            Robinet mélangeur</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Douche</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Robinet mitigeur monocommande</a></li>
                                        <li><a href="/produits/parquet">
                                            Robinet mitigeur thermostatique</a></li>

                                    </ul>
                                    <ul>
                                        <li className="li_un"><a href="/produits/parquet">
                                            Mélangeur de douche</a></li>
                                        <li><a href="/produits/parquet">
                                            Ensemble de douche</a></li>
                                        <li><a href="/produits/parquet">
                                            Tête de pluie</a></li>
                                    </ul>
                                </div>
                                <div className="categories_deux">
                                    <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                        <h3>Accessoires Sanitaire</h3>
                                    </a>
                                    <ul>
                                        <li className="li_un"><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-5">
                                            Vidage</a></li>
                                        <li><a href="/produits/parquet">
                                            Flexible</a></li>
                                        <li><a href="/produits/parquet">
                                            Barre de douche</a></li>
                                        <li><a href="/produits/parquet">
                                            Plaque WC</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="header_logo">
                    <Link to="/home">
                        <img src={Logo} alt="logo Maison du Revêtement"/>
                    </Link>
                </div>
                <div className="header_droite">
                    <div className="header_droite_onglets">
                        <h2><a href="https://maisondurevetement.odoo.com/contact">Nous<br />Contacter</a></h2>
                        <h2><Link to="/livraison-et-retour">Livraison</Link></h2>
                        <h2><Link to="/simulateur-3D">Simulateur<br />3D</Link></h2>
                    </div>
                    <div className="header_droite_icones">
                        <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/cart"><i className="fa-solid fa-cart-shopping"></i></a>
                        <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/web/login"><i className="fa-solid fa-user"></i></a>
                        <a href="tel:+33156555526"><i className="fa-solid fa-phone"></i></a>
                    </div>
                </div>
            </div>
        </header>
    )
}