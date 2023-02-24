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

/* Code */
export default function Parquet() {
    return (
        <>
            <header className="header header_parquet">
                <Header />
                <Produits pdt={"PARQUET"} txt={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} />
            </header>
            <section className="produits">
                <div className="produits_categories">
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-44">
                            <img src={MassifImg} alt="Parquet Massif"/>
                            <h2>Massif</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/parquet-contrecolle-45">
                            <img src={ContrecolleImg} alt="Parquet Contrecollé"/> 
                            <h2>Contrecollé</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/parquet-stratifie-pvc-46">
                            <img src={StratifieImg} alt="Parquet Stratifié & PVC"/>
                            <h2>Stratifié & PVC</h2>
                        </a>
                    </div>
                </div>
            </section>
            <div className="produits_bottom"></div>
            <Plus />
            <div className="divEspace"></div>
        </>
    )
}