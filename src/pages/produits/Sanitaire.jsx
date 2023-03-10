/* Components */
import Header from '../../components/Header'
import Produits from "../../components/Produits"
import Plus from "../../components/Plus"

/* Images */
import LavaboImg from "../../assets/sanitaire-lavabo.jpg"
import BaignoireImg from "../../assets/sanitaire-baignoire.jpg"
import DoucheImg from "../../assets/sanitaire-douche.jpg"

/* Code */
export default function Sanitaire() {
    return (
        <>            
            <header className="header header_sanitaire">
                <Header />
                <Produits pdt={"SANITAIRE"} txt={"Pour compléter vos projets d'aménagement, quoi de mieux qu'habiller vos salles d'eau de pièces d'exception de robineterie, de douche ou encore de baignoire. Vous trouverez forcément des éléments sanitaire pour créer un atmosphère chaleureux et luxieux, mis en avant par vos revêtements."} />
            </header>
            <section className="produits">
                <div className="produits_categories">
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-lavabo-78">
                            <img src={LavaboImg} alt="Parquet Massif"/>
                            <h2>Lavabo</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-baignore-104#">
                            <img src={BaignoireImg} alt="Parquet Contrecollé"/> 
                            <h2>Baignoire</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-douche-105">
                            <img src={DoucheImg} alt="Parquet Stratifié & PVC"/>
                            <h2>Douche</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/sanitaire-accessoires-sanitaire-106">
                            <img src={LavaboImg} alt="Parquet Massif"/>
                            <h2>Accessoires Sanitaire</h2>
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