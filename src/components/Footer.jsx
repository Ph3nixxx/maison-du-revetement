/* Images */
import PetitLogo from "../assets/logo2.png";

export default function Header() { 
    return (
        <footer class="footer">
            <section class="footer_list">
                <ul class="footer_produits">
                    <h4>Produits</h4>
                    <li><a href="#"><i class="footer_produits_parquet"></i>Parquet</a></li>
                    <li><a href="#"><i class="footer_produits_carrelage"></i>Carrelage</a></li>
                    <li><a href="#"><i class="footer_produits_sanitaire"></i>Sanitaire</a></li>
                    <li><a href="#"><i class="footer_produits_accessoires"></i>Accessoires</a></li>
                </ul>
                <ul class="footer_produits">
                    <h4>Services</h4>
                    <li><a href="#"><i class="footer_produits_parquet"></i>Espace Client</a></li>
                    <li><a href="#"><i class="footer_produits_sanitaire"></i>Mon Panier</a></li>
                    <li><a href="#"><i class="footer_produits_accessoires"></i>Nos Conseils</a></li>
                </ul>
                <ul class="footer_contact">
                    <h4>Contacts</h4>
                    <li class="footer_contact_nousContacter"><a href="#">Formulaire de contact</a></li>
                    <li class="footer_contact_telephone">Téléphone : +331.56.55.55.26</li>
                    <li class="footer_contact_showroom"><p>Adresse du Showroom :</p>23 Avenue du Chemin des Reniers <br />92390 Villeneuve-la-Garenne</li>
                </ul>
            </section>
            <section class="footer_end">
                <div>
                    <p>© Maison du Revêtement</p>
                </div>
                <div>
                    <a href="#">Conditions générales de vente</a>
                </div>
                <div class="footer_logo">
                    <img src={PetitLogo} alt="Petit Logo Maison du Revêtement"/>
                </div>
                <div>
                    <a href="#">Mentions légales</a>
                </div>
                <div>
                    <p>2023</p>
                </div>
            </section>
        </footer>
    )
}