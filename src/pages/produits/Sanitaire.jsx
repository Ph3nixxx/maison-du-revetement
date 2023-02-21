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
import LavaboImg from "../../assets/sanitaire-lavabo.jpg"
import BaignoireImg from "../../assets/sanitaire-baignoire.jpg"
import DoucheImg from "../../assets/sanitaire-douche.jpg"

export default function Sanitaire() {
    return (
        <>            
        <header className="header">
            <Header />
            <Produits pdt={"SANITAIRE"} txt={"2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} />
        </header>
            <section className="produits">
                <div className="produits_categories">
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-2">
                            <img src={LavaboImg} alt="Parquet Massif"/>
                            <h2>Lavabo</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="#">
                            <img src={BaignoireImg} alt="Parquet Contrecollé"/> 
                            <h2>Baignoire</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="#">
                            <img src={DoucheImg} alt="Parquet Stratifié & PVC"/>
                            <h2>Douche</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/category/carrelage-gres-cerame-2">
                            <img src={LavaboImg} alt="Parquet Massif"/>
                            <h2>Accessoires</h2>
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