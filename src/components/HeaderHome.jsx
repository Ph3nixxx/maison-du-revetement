/* Modules */
import React from "react"
import { Link } from 'react-router-dom'

/* Images */
import Logo from "../assets/mdr_logo2.png";
import Video from "../assets/video.mov";

export default function HeaderHome() { 
    return (
        <header className="headerHome">
            <video src={Video} type="video/mov" muted loop ></video>
            <div className="headerHome_nav">
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
                            </div>
                        </div>                        
                        <div className="header_gauche_megamenu_sanitaire">
                            <button className="bouton_sanitaire">
                                <Link to="/produits/sanitare">
                                    <h2>Le<br />Sanitaire</h2>
                                </Link>
                            </button>
                            <div className="categories_sanitaire">
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
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="headerHome_logo">
                    <Link to="/home">
                        <img src={Logo} alt="logo Maison du Revêtement"/>
                    </Link>
                </div>
                <div className="header_droite">
                    <div className="header_droite_onglets">
                        <h2><a href="https://maisondurevetement.odoo.com/contact">Nous<br />Contacter</a></h2>
                        <h2><Link to="/livraison-et-retour">Livraison</Link></h2>
                        <h2><a href="https://maisondurevetement.odoo.com/contact">Simulateur<br />3D</a></h2>
                    </div>
                    <div className="header_droite_icones">
                        <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/cart"><i className="fa-solid fa-cart-shopping"></i></a>
                        <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/web/login"><i className="fa-solid fa-user"></i></a>
                        <a href="tel:+33156555526"><i className="fa-solid fa-phone"></i></a>
                    </div>
                </div>
            </div>
            <div className="headerHome_nav headerHome_nav_second">
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
                            </div>
                        </div>                        
                        <div className="header_gauche_megamenu_sanitaire">
                            <button className="bouton_sanitaire">
                                <Link to="/produits/sanitare">
                                    <h2>Le<br />Sanitaire</h2>
                                </Link>
                            </button>
                            <div className="categories_sanitaire">
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
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="headerHome_logo">
                    <Link to="/home">
                        <img src={Logo} alt="logo Maison du Revêtement"/>
                    </Link>
                </div>
                <div className="header_droite">
                    <div className="header_droite_onglets">
                        <h2><a href="https://maisondurevetement.odoo.com/contact">Nous<br />Contacter</a></h2>
                        <h2><Link to="/livraison-et-retour">Livraison</Link></h2>
                        <h2><a href="https://maisondurevetement.odoo.com/contact">Simulateur<br />3D</a></h2>
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