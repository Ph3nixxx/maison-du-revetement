/* Modules */
import React from "react"
import { Link } from 'react-router-dom'

/* Components */
import HeaderHome from '../components/HeaderHome'

/* Images */
import Nav6 from "../assets/nav6.jpg"
import Parquet from "../assets/parquet.jpg"
import ParquetMassif from "../assets/parquet-massif.jpg"
import ParquetContrecolle from "../assets/parquet-contrecolle.jpg"
import ParquetStratifie from "../assets/parquet-stratifie.jpg"
import ParquetPVC from "../assets/parquet-pvc.jpg"
import Carrelage from "../assets/carrelage.jpg"
import CarrelageGres from "../assets/carrelage-gres.jpg"
import CarrelageFaience from "../assets/faïence-murale.jpeg"
import CarrelagePierres from "../assets/pierres-naturelles.jpeg"
import CarrelageExterieur from "../assets/exterieur.jpeg"
import Sanitaire from "../assets/sanitaire.jpeg"
import Robineterie from "../assets/robineterie.jpg"
import Moulures from "../assets/moulures.jpg"
import MeublesSDB from "../assets/meublesSDB.jpg"
import Consommables from "../assets/consommables.jpg"
import Nav5 from "../assets/nav5.png"
import Showroom2 from "../assets/showroom2.jpeg"

export default function Home() {
    return (
        <>
            <HeaderHome />
            <main>
                <section className="gammes">
                    <div className="gammes_titre">
                        <h2>Nos Différentes Gammes de Produits</h2>
                        <h3>Pour les professionnels et les particuliers</h3>
                    </div>
                    <div className="gallery">
                        <div className="gallery_un">
                            <div className="gallery_trois">
                                <Link to="/produits/carrelage">
                                    <img src={Carrelage} alt="Parquet Maison du Revêtement"/>
                                    <h3>Carrelage</h3>
                                </Link>
                            </div>
                            <div className="gallery_trois">
                                <Link to="/produits/parquet">
                                    <img src={Parquet} alt="Carrelage Maison du Revêtement"/>
                                    <h3>Parquet</h3>
                                </Link>
                            </div>
                        </div>
                        <div className="gallery_sept">
                            <div className="gallery_deux">
                                <div className="gallery_quatre">
                                    <div className="gallery_cinq">
                                        <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-39">
                                            <img src={CarrelageGres} alt="Massif Maison du Revêtement"/>
                                            <h3>Sol & Murs</h3>
                                        </a>
                                    </div>
                                    <div className="gallery_cinq">
                                        <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-faiences-40">
                                            <img src={CarrelageFaience} alt="Contrecollé Maison du Revêtement"/>
                                            <h3>Les Faïences</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="gallery_quatre">
                                    <div className="gallery_cinq">
                                        <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-exterieurs-41">
                                            <img src={CarrelageExterieur} alt="Stratifié Maison du Revêtement"/>
                                            <h3>Les Extérieurs</h3>
                                        </a>
                                    </div>
                                    <div className="gallery_cinq">
                                        <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-pierres-naturelles-42">
                                            <img src={CarrelagePierres} alt="PVC Maison du Revêtement"/>
                                            <h3>Pierres Naturelles</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="gallery_quatre">
                                    <div className="gallery_cinq">
                                        <a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-44">
                                            <img src={ParquetMassif} alt="Stratifié Maison du Revêtement"/>
                                            <h3>Massif</h3>
                                        </a>
                                    </div>
                                    <div className="gallery_cinq">
                                        <a href="https://maisondurevetement.odoo.com/shop/category/parquet-contrecolle-45">
                                            <img src={ParquetContrecolle} alt="PVC Maison du Revêtement"/>
                                            <h3>Contrecollé</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="gallery_quatre">
                                    <div className="gallery_cinq">
                                        <a href="https://maisondurevetement.odoo.com/shop/category/parquet-stratifie-pvc-les-stratifies-90">
                                            <img src={ParquetStratifie} alt="Stratifié Maison du Revêtement"/>
                                            <h3>Stratifié</h3>
                                        </a>
                                    </div>
                                    <div className="gallery_cinq">
                                        <a href="https://maisondurevetement.odoo.com/shop/category/parquet-stratifie-pvc-les-pvc-91">
                                            <img src={ParquetPVC} alt="PVC Maison du Revêtement"/>
                                            <h3>PVC</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery_deux">
                                <div className="gallery_quatre">
                                    <div className="gallery_cinq">
                                        <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-accessoires-carrelage-76">
                                            <img src={Robineterie} alt="PVC Maison du Revêtement"/>
                                            <h3>Accessoires Carrelage</h3>
                                        </a>
                                    </div>                               
                                    <div className="gallery_cinq">
                                        <a href="#">
                                            <img src={Moulures} alt="PVC Maison du Revêtement"/>
                                            <h3>Lavabo</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="gallery_six">
                                    <Link to="/produits/sanitaire">
                                        <img src={Sanitaire} alt="Sanitaire Maison du Revêtement"/>
                                        <h3>Sanitaire</h3>
                                    </Link>
                                </div>
                                <div className="gallery_quatre">
                                    <div className="gallery_cinq">
                                        <a href="https://maisondurevetement.odoo.com/shop/category/parquet-accessoires-parquet-77">
                                            <img src={MeublesSDB} alt="PVC Maison du Revêtement"/>
                                            <h3>Accessoires Parquet</h3>
                                        </a>
                                    </div>
                                    <div className="gallery_cinq">  
                                        <a href="#">
                                            <img src={Consommables} alt="PVC Maison du Revêtement"/>
                                            <h3>Douche</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pro">
                    <div className="pro_texte">
                        <h2>Pour vous, professionnels</h2>
                        <span className="pro_texte_ligne"></span>
                        <p className="pro_texte_top">Vous êtes architectes ou artisans ? Nous vous proposons un service sur-mesure afin de réaliser tous vos projets.</p>
                        <p>Contactez-nous directement pour découvrir nos tarifs pro ainsi que notre service d'envoi d'échantillons et de catalogues ... nous répondrons forcément à vos attentes !</p>
                        <p>Créer votre espace pro afin de conserver le suivi de vos devis, bons de commande et factures.</p>
                        <div className="pro_boutons">
                            <button className="boutonPro"><a href="https://maisondurevetement.odoo.com/contact">Nous Contacter</a></button>
                            <button className="boutonPro"><a href="https://maisondurevetement.odoo.com/cart">Espace Pro</a></button>
                        </div>
                    </div>
                    <div className="pro_photo">
                        <img src={Nav5} alt="Cuisine carrelage"/>
                    </div>
                </section>
                <section className="presentation">
                    <div className="presentation_photo">
                        <img src={Nav6} alt="Cuisine carrelage"/>
                    </div>
                    <div className="presentation_texte">
                        <h2>Qui sommes-nous ?</h2>
                        <span className="presentation_texte_ligne"></span>
                        <p className="presentation_texte_top">Maison du revêtement, entreprise spécialisée dans le revêtement de murs et de sols, est située en Ile de France et dispose de son entrepôt à Villeneuve-la-Garenne.</p>
                        <p>Passionnés par la décoration et le design depuis toujours, notre mission est de mettre notre expertise à votre disposition, de vous conseiller tout en vous accompagnant tout au long de votre projet de décoration et/ou de rénovation.</p>
                        <p>La force de Maison du revêtement est de proposer des produits haut de gamme à un tarif accessible à tous. Notre large choix de coloris et de matière répondra parfaitement à vos demandes les plus spécifiques, pour enfin créer "votre intérieur", un espace de vie à "votre image".</p>
                        <p>L'équipe de maison du revêtement, compétente et talentueuse, vous propose une expérience de qualité, à travers son accompagnement et ses produits avec pour ambition : satisfaire 100% de ses clients.</p>
                    </div>
                </section>
            </main>
            <section className="showroom">
                <div className="showroom_div">
                    <div className="showroom_div_texte">
                        <p>Notre équipe d'experts vous attend dans notre showroom situé :</p>
                        <p className="adresse">23 Avenue du Chemin des Reniers<br />à Villeneuve-la-Garenne</p>
                    </div>
                    <img src={Showroom2} alt="Showroom Maison du Revêtement"/>
                </div>
            </section>
        </>
    )
};