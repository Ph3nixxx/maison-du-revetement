/* Components */
import Header from '../../components/Header'
import Produits from "../../components/Produits"
import Plus from "../../components/Plus"

/* Images */
import SolMurs from "../../assets/carrelage-sol-murs.jpg"
import Faience from "../../assets/carrelage-faience.jpg"
import Exterieur from "../../assets/carrelage-exterieur.jpeg"
import Pierres from "../../assets/carrelage-pierres.jpg"
import Accessoires from "../../assets/carrelage-accessoires.jpg"

/* Code */
export default function Carrelage() {
    return (
        <>
            <header className="header header_carrelage">
                <Header />
                <Produits pdt={"CARRELAGE"} txt={"Réputé pour son entretien minimal, le carrelage saura résister à toutes les épreuves du quotidien. Fort d'un choix important d'aspects, de formes et de couleurs, le carrelage se démarque par sa polyvalence et sa propension à reflèter la lumière."} />
            </header>
            <section className="produits">
                <div className="produits_categories">
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-39">
                            <img src={SolMurs} alt="Parquet Massif"/>
                            <h2>Sol & Murs</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-faiences-40">
                            <img src={Faience} alt="Parquet Contrecollé"/> 
                            <h2>Les Faïences</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-exterieurs-41">
                            <img src={Pierres} alt="Parquet Stratifié & PVC"/>
                            <h2>Les Extérieurs</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-pierres-naturelles-42">
                            <img src={Exterieur} alt="Parquet Massif"/>
                            <h2>Pierres Naturelles</h2>
                        </a>
                    </div>
                    <div className="produits_categories_card">
                        <a href="https://maisondurevetement.odoo.com/shop/category/carrelage-les-mosaiques-43">
                            <img src={Accessoires} alt="Parquet Contrecollé"/> 
                            <h2>Les Mosaïques</h2>
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