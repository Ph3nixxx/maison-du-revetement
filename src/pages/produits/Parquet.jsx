/* Components */
import Header from '../../components/Header'
import Produits from "../../components/Produits"
import Plus from "../../components/Plus"

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
                <Produits pdt={"PARQUET"} txt={"Opter pour un parquet c'est privilégier des matériaux authentiques, naturels, intemporels, porteurs de valeurs sûres. Image de noblesse et de l'histoire de France, le parquet est utilisé depuis des siècles. Réputé pour sa robustesse, il conserve son image traditionnel tout en s’adaptant aux tendances du moment."} />
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