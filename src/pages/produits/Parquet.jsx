/* Modules */
import React from "react"

/* Dépendences */
import Produits from "../../components/Produits"
import Plus from "../../components/Plus"

/* Components */
import Header from '../../components/Header'

/* Styles */
import '../../styles/pages/Produits.css'

/* Images */
import MassifImg from "../../assets/parquet-massif.jpg"
import ContrecolleImg from "../../assets/parquet-contrecolle.jpg"
import StratifieImg from "../../assets/parquet-stratifie.jpg"
import PVCImg from "../../assets/parquet-pvc.jpg"

export default function Parquet() {
    return (
        <>
            <Header />
            <section className="produits">
                <Produits pdt={"PARQUET"} txt={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} />
                <div className="produits_categories">
                    <div className="produits_categories_un">
                        <div className="produits_categories_deux">
                            <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-2">
                                <img src={MassifImg} alt="Parquet Massif"/>
                                <h2>Massif</h2>
                            </a>
                        </div>
                        <div className="produits_categories_deux">
                            <a href="#">
                                <img src={ContrecolleImg} alt="Parquet Contrecollé"/> 
                                <h2>Contrecollé</h2>
                            </a>
                        </div>
                    </div>
                    <div className="produits_categories_un">
                        <div className="produits_categories_deux">
                            <a href="#">
                                <img src={StratifieImg} alt="Parquet Stratifié"/>
                                <h2>Stratifié</h2>
                            </a>
                        </div>
                        <div className="produits_categories_deux">
                            <a href="#">
                                <img src={PVCImg} alt="Parquet PVC"/>
                                <h2>PVC</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="produits_bottom"></div>
            <Plus />
            <div className="divEspace"></div>
        </>
    )
};