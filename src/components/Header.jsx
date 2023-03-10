/* Modules */
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

/* Images */
import Logo from "../assets/mdr_logo2.png"

/* Code */
export default function Header() {

    /* Réduction du header lors d'un scroll */
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    /* Menu Burger */
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`${scroll ? "header_nav_scroll" : "header_nav"} ${showLinks ? "show-burger" : "hide-burger"}`}>
            <button className="burger_button" onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
            <div className="header_gauche">
                <div className="header_gauche_icones">
                    <a href="https://www.facebook.com/profile.php?id=100089922982015"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/maison_du_revetement/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="mailto:support@maisondurevetement.com"><i className="fa-solid fa-envelope"></i></a>
                </div>
                    <div className={`header_gauche_megamenu ${showLinks ? "show" : "hidden"}`}>
                        <button className="bouton_carrelage">
                            <a href="https://maisondurevetement.odoo.com/contact">
                                <h2>Contacts</h2>
                            </a>
                        </button>
                        <button className="bouton_carrelage">
                            <Link to="/livraison-et-retour">
                                <h2>Livraison</h2>
                            </Link>
                        </button>
                        <button className="bouton_carrelage">
                            <Link to="/simulateur-3D">
                                <h2>Simul. 3D</h2>
                            </Link>
                        </button>
                    </div>
                <div className="header_gauche_megamenu">
                    <div className="header_gauche_megamenu_carrelage">
                        <button className="bouton_carrelage">
                            <Link to="/produits/carrelage">
                                <h2>Carrelage</h2>
                            </Link>
                        </button>
                        <div className="categories_carrelage">
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-39">
                                    <h3>Sol & Mur</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-les-formats-xxl-47">
                                        Les Formats XXL</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-imitation-marbre-50">
                                        Imitation Marbre</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-les-hexagonaux-49">
                                        Les Hexagonaux</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-imitation-terrazzo-48">
                                        Imitation Terrazzo</a></li>
                                </ul>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-les-betons-cires-53">
                                        Les Bétons Cirés</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-imitation-pierre-54">
                                        Imitation Pierre</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-imitation-bois-51">
                                        Imitation Bois</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-imitation-carreaux-de-ciment-52">
                                        Imitation Carreaux de Ciment</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-faiences-40">
                                    <h3>Les Faïences Murales</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-faiences-pour-les-archis-55">
                                        Pour les Archis</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-faiences-3d-les-reliefs-56">
                                        3D / Les Reliefs</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-faiences-les-coordonnees-sol-murs-57">
                                        Les Coordonnées Sol et Murs</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-faiences-les-motifs-58">
                                        Les Motifs</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-faiences-les-unis-59">
                                        Les Unis</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-exterieurs-41">
                                    <h3>Les Extérieurs</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-exterieurs-les-fortes-epaisseurs-60">
                                        Les Fortes Épaisseurs</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-exterieurs-antiderapants-61">
                                        Antidérapants</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-exterieurs-piscines-62">
                                        Piscines</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-exterieurs-les-paves-63">
                                        Les Pavés</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-pierres-naturelles-42">
                                    <h3>Pierres Naturelles</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-pierres-naturelles-les-terrazos-64">
                                        Les Terrazzos</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-pierres-naturelles-les-ardoises-67">
                                        Les Ardoises</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-pierres-naturelles-les-zelliges-69">
                                        Les Zelliges</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-pierres-naturelles-les-carreaux-de-ciment-68">
                                        Les Carreaux de Ciment</a></li>
                                </ul>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-pierres-naturelles-les-travertins-65">
                                        Les Travertins</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-pierres-naturelles-les-tomettes-66">
                                        Les Tomettes</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-pierres-naturelles-les-marbres-70">
                                        Les Marbres</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-mosaiques-43">
                                    <h3>Les Mosaïques</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-mosaiques-hexagonal-71">
                                        Hexagonal</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-mosaiques-verre-72">
                                        Verre</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-mosaiques-cerame-73">
                                        Cérame</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-mosaiques-pierre-marbre-75">
                                        Pierre & Marbre</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-accessoires-carrelage-76">
                                    <h3>Accessoires Carrelage</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-accessoires-carrelage-plinthes-92">
                                        Plinthes</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-accessoires-carrelage-colles-93">
                                        Colles</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-accessoires-carrelage-joints-94">
                                        Joints</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-accessoires-carrelage-croisillons-95">
                                        Croisillons</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-accessoires-carrelage-produits-d-entretien-96">
                                        Produits d'entretien</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-accessoires-carrelage-ragreages-et-primaires-97">
                                        Ragréages et primaires</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header_gauche_megamenu_parquet">
                        <button className="bouton_parquet">
                            <Link to="/produits/parquet">
                                <h2>Parquet</h2>
                            </Link>
                        </button>
                        <div className="categories_parquet">
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-44">
                                    <h3>Massif</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-les-bruts-79">
                                        Les Bruts</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-les-huiles-80">
                                        Les Huilés</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-les-vernis-81">
                                        Les Vernis</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-les-geometriques-83">
                                        Les Géométriques</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-les-geometriques-point-de-hongrie-84">
                                        Point de Hongrie</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-les-geometriques-dalle-versailles-85">
                                        Dalle Versailles</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-les-geometriques-baton-rompu-86">
                                        Bâton Rompu</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/parquet-contrecolle-45">
                                    <h3>Contrecollé</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/parquet-contrecolle-les-huiles-87">
                                        Les Huilés</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-contrecolle-les-vernis-88">
                                        Les Vernis</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-contrecolle-les-geometriques-89">
                                        Les Géométriques</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/parquet-stratifie-pvc-46">
                                    <h3>Stratifié & PVC</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/parquet-stratifie-pvc-les-stratifies-90">
                                        Les Stratifiés</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-stratifie-pvc-les-pvc-91">
                                        Les PVC</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/parquet-accessoires-parquet-77">
                                    <h3>Accessoires Parquet</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/parquet-accessoires-parquet-plinthes-98">
                                        Plinthes</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-accessoires-parquet-colles-99">
                                        Colles</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-accessoires-parquet-ragreages-et-primaires-100">
                                        Ragréages et primaires</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-accessoires-parquet-sous-cache-et-isolation-101">
                                        Sous-couche et isolation</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-accessoires-parquet-produits-d-entretien-102">
                                        Produits d'entretien</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>              
                    <div className="header_gauche_megamenu_sanitaire">
                        <button className="bouton_sanitaire">
                            <Link to="/produits/sanitaire">
                                <h2>Sanitaire</h2>
                            </Link>
                        </button>
                        <div className="categories_sanitaire">
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-lavabo-78">
                                    <h3>Lavabo</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-lavabo-robinet-mitigeur-a-encastrer-107">
                                        Robinet mitigeur à encastrer</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-lavabo-robinet-mitigeur-sur-plan-108">
                                        Robinet mitigeur sur plan</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-lavabo-robinet-mitigeur-thermostatique-109">
                                        Robinet mitigeur thermostatique</a></li>
                                </ul>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-lavabo-robinet-melangeur-110">
                                        Robinet mélangeur</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-baignore-104">
                                    <h3>Baignoire</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-baignore-robinet-monocommande-a-encastrer-111">
                                        Robinet monocommande à encastrer</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-baignore-robinet-monocommande-sur-gorge-112">
                                        Robinet monocommande sur gorge</a></li>

                                </ul>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-baignore-robinet-mitigeur-thermostatique-113">
                                        Robinet mitigeur thermostatique</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-baignore-robinet-mitigeur-pour-bidet-114">
                                        Robinet mitigeur pour bidet</a></li>
                                </ul>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-baignore-colonne-de-baignore-au-sol-115">
                                        Colonne de baignoire au sol</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-baignore-douchette-116">
                                        Douchette</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-baignore-robinet-melangeur-117">
                                        Robinet mélangeur</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-douche-105">
                                    <h3>Douche</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-douche-robinet-mitigeur-monocommande-118">
                                        Robinet mitigeur monocommande</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-douche-robinet-mitigeur-thermostatique-119">
                                        Robinet mitigeur thermostatique</a></li>

                                </ul>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-douche-melangeur-de-douche-120">
                                        Mélangeur de douche</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-douche-ensemble-de-douche-121">
                                        Ensemble de douche</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-douche-tete-de-pluie-122">
                                        Tête de pluie</a></li>
                                </ul>
                            </div>
                            <div className="categories_deux">
                                <a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-accessoires-sanitaire-106">
                                    <h3>Accessoires Sanitaire</h3>
                                </a>
                                <ul>
                                    <li className="li_un"><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-accessoires-sanitaire-vidage-123">
                                        Vidage</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-accessoires-sanitaire-flexible-124">
                                        Flexible</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-accessoires-sanitaire-barre-de-douche-125">
                                        Barre de douche</a></li>
                                    <li><a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-accessoires-sanitaire-plaque-wc-126">
                                        Plaque WC</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_logo">
                <Link to="/home">
                    <img src={Logo} alt="logo Maison du Revêtement"/>
                </Link>
            </div>
            <div className="header_droite">
                <div className="header_droite_onglets">
                    <h2><a href="https://maisondurevetement.odoo.com/contact">Contacts</a></h2>
                    <h2><Link to="/livraison-et-retour">Livraison</Link></h2>
                    <h2><Link to="/simulateur-3D">Simul. 3D</Link></h2>
                </div>
                <div className="header_droite_icones">
                    <a href="https://maisondurevetement.odoo.com/shop/cart"><i className="fa-solid fa-cart-shopping"></i></a>
                    <a href="https://maisondurevetement.odoo.com/web/login"><i className="fa-solid fa-user"></i></a>
                    <a href="tel:+33156555526"><i className="fa-solid fa-phone"></i></a>
                </div>
            </div>
        </nav>
    )
}