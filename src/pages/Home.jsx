/* Modules */
import React from "react"

/* Images */
import Nav6 from "../assets/nav6.jpg"
import Parquet from "../assets/parquet.jpg"
import Carrelage from "../assets/carrelage.png"
import Nav5 from "../assets/nav5.png"
import Showroom2 from "../assets/showroom2.jpeg"

export default function Home() {
    return (
        <>
            <main>
                <section class="presentation">
                    <div class="presentation_photo">
                        <img src={Nav6} alt="Cuisine carrelage"/>
                    </div>
                    <div class="presentation_texte">
                        <h2>Qui sommes-nous ?</h2>
                        <span class="presentation_texte_ligne"></span>
                        <p class="presentation_texte_top">Maison du revêtement, entreprise spécialisée dans le revêtement de murs et de sols, est située en Ile de France et dispose de son entrepôt à Villeneuve-la-Garenne.</p>
                        <p>Passionnés par la décoration et le design depuis toujours, notre mission est de mettre notre expertise à votre disposition, de vous conseiller tout en vous accompagnant tout au long de votre projet de décoration et/ou de rénovation.</p>
                        <p>La force de Maison du revêtement est de proposer des produits haut de gamme à un tarif accessible à tous. Notre large choix de coloris et de matière répondra parfaitement à vos demandes les plus spécifiques, pour enfin créer "votre intérieur", un espace de vie à "votre image".</p>
                        <p>L'équipe de maison du revêtement, compétente et talentueuse, vous propose une expérience de qualité, à travers son accompagnement et ses produits avec pour ambition : satisfaire 100% de ses clients.</p>
                    </div>
                </section>
                <section class="gammes">
                    <div class="gammes_titre">
                        <h2>Nos Différentes Gammes de Produits</h2>
                        <h3>Pour les professionnels et les particuliers</h3>
                    </div>
                    <div class="gallery">
                        <div class="gallery_un">
                            <div class="gallery_trois">
                                <a href="./produits/parquet">
                                    <img src={Parquet} alt="Parquet Maison du Revêtement"/>
                                    <h3>Parquet</h3>
                                </a>
                            </div>
                            <div class="gallery_trois">
                                <a href="#">
                                    <img src={Carrelage} alt="Carrelage Maison du Revêtement"/>
                                    <h3>Carrelage</h3>
                                </a>
                            </div>
                        </div>
                        <div class="gallery_sept">
                            <div class="gallery_deux">
                                <div class="gallery_quatre">
                                    <div class="gallery_cinq">
                                        <a href="https://maisondurevetement-15-0-staging-1-6887676.dev.odoo.com/shop/category/parquet-massif-8">
                                            <img src={Parquet} alt="Massif Maison du Revêtement"/>
                                            <h3>Massif</h3>
                                        </a>
                                    </div>
                                    <div class="gallery_cinq">
                                        <a href="#">
                                            <img src={Parquet} alt="Contrecollé Maison du Revêtement"/>
                                            <h3>Contrecollé</h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="gallery_quatre">
                                    <div class="gallery_cinq">
                                        <a href="#">
                                            <img src={Parquet} alt="Stratifié Maison du Revêtement"/>
                                            <h3>Stratifié</h3>
                                        </a>
                                    </div>
                                    <div class="gallery_cinq">
                                        <a href="#">
                                            <img src={Parquet} alt="PVC Maison du Revêtement"/>
                                            <h3>PVC</h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="gallery_quatre">
                                    <div class="gallery_cinq">
                                        <a href="#">
                                            <img src={Parquet} alt="Stratifié Maison du Revêtement"/>
                                            <h3>Sol</h3>
                                        </a>
                                    </div>
                                    <div class="gallery_cinq">
                                        <a href="#">
                                            <img src={Parquet} alt="PVC Maison du Revêtement"/>
                                            <h3>Mural</h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="gallery_quatre">
                                    <div class="gallery_cinq">
                                        <a href="#">
                                            <img src={Parquet} alt="Stratifié Maison du Revêtement"/>
                                            <h3>Mosaïque</h3>
                                        </a>
                                    </div>
                                    <div class="gallery_cinq">
                                        <a href="#">
                                            <img src={Parquet} alt="PVC Maison du Revêtement"/>
                                            <h3>Pièces Spéciales</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="gallery_deux">
                                <div class="gallery_quatre">
                                    <div class="gallery_cinq">
                                        <a href="#">
                                            <img src={Parquet} alt="PVC Maison du Revêtement"/>
                                            <h3>Robineterie</h3>
                                        </a>
                                    </div>                               
                                    <div class="gallery_cinq">
                                        <a href="#">
                                            <img src={Parquet} alt="PVC Maison du Revêtement"/>
                                            <h3>Autre I</h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="gallery_six">
                                    <a href="#">
                                        <img src={Parquet} alt="Accessoires Maison du Revêtement"/>
                                        <h3>Sanitaire</h3>
                                    </a>
                                </div>
                                <div class="gallery_quatre">
                                    <div class="gallery_cinq">
                                        <a href="#">
                                            <img src={Parquet} alt="PVC Maison du Revêtement"/>
                                            <h3>Meubles Salle de Bain</h3>
                                        </a>
                                    </div>
                                    <div class="gallery_cinq">  
                                        <a href="#">
                                            <img src={Parquet} alt="PVC Maison du Revêtement"/>
                                            <h3>Autre II</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="pro">
                    <div class="pro_texte">
                        <h2>Pour vous, professionnels</h2>
                        <span class="pro_texte_ligne"></span>
                        <p class="pro_texte_top">Nous vous proposons un service sur-mesure afin de réaliser tous vos projets.</p>
                        <p>Tarifs pro, envoi d'échantillon ... nous répondrons forcément à vos attentes !</p>
                        <p>Créer votre espace pro afin de conserver le suivi de vos devis, bons de commande et factures.</p>
                        <p class="boutton_espacePro">Espace Pro</p>
                    </div>
                    <div class="pro_photo">
                        <img src={Nav5} alt="Cuisine carrelage"/>
                    </div>
                </section>
            </main>
            <section class="showroom">
                <div class="showroom_div">
                    <div class="showroom_div_texte">
                        <p>Notre équipe d'experts vous attend dans notre showroom situé :</p>
                        <p class="adresse">23 Avenue des Reniers<br />à Villeneuve-la-Garenne</p>
                    </div>
                    <img src={Showroom2} alt="Showroom Maison du Revêtement"/>
                </div>
            </section>
        </>
    )
};