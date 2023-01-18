/* Modules */
import React from "react"

/* Dépendences */
import Produits from "../../components/Produits"
import Plus from "../../components/Plus"

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
            <section className="produits">
                <Produits pdt={"PARQUET"} />
                <div className="produits_categories">
                    <div className="produits_categories_un">
                        <div className="produits_categories_deux">
                            <a href="https://maisondurevetement-15-0-staging-1-6887676.dev.odoo.com/shop/category/parquet-massif-8">
                                <img src={MassifImg} alt="Parquet Massif"/>
                                <h3>Massif</h3>
                            </a>
                        </div>
                        <div className="produits_categories_deux">
                            <a href="#">
                                <img src={ContrecolleImg} alt="Parquet Contrecollé"/> 
                                <h3>Contrecollé</h3>
                            </a>
                        </div>
                    </div>
                    <div className="produits_categories_un">
                        <div className="produits_categories_deux">
                            <a href="#">
                                <img src={StratifieImg} alt="Parquet Stratifié"/>
                                <h3>Stratifié</h3>
                            </a>
                        </div>
                        <div className="produits_categories_deux">
                            <a href="#">
                                <img src={PVCImg} alt="Parquet PVC"/>
                                <h3>PVC</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="produits_bottom"></div>
            <Plus />
        </>
    )
};