/* Modules */
import React from "react"
import { Link } from 'react-router-dom'

/* Images */
import PetitLogo from "../assets/mdr_logo.png";

export default function Footer() { 
    return (
        <footer className="footer">
            <section className="footer_list">
                <div className="footer_produits">
                    <h4>Produits</h4>
                    <div className="footer_produits_texte">
                        <ul className="list_un">
                            <li><Link to="/produits/carrelage" className="footer_produits_carrelage">Carrelage</Link></li>
                            <li><Link to="/produits/parquet" className="footer_produits_parquet">Parquet</Link></li>
                            <li><Link to="/produits/sanitaire" className="footer_produits_sanitaire">Sanitaire</Link></li>
                        </ul>
                        <ul>
                            <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-sol-murs-39" className="footer_produits_sanitaire">Carrelage Sol & Murs</a></li>
                            <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-massif-44" className="footer_produits_sanitaire">Parquet Massif</a></li>
                            <li><a href="https://maisondurevetement.odoo.com/shop/category/carrelage-accessoires-carrelage-76" className="footer_produits_sanitaire">Accessoires Carrelage</a></li>
                            <li><a href="https://maisondurevetement.odoo.com/shop/category/parquet-accessoires-parquet-77" className="footer_produits_sanitaire">Accessoires Parquet</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_services">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="https://maisondurevetement.odoo.com/web/login" className="footer_produits_espace">Espace Client</a></li>
                        <li><a href="https://maisondurevetement.odoo.com/shop/cart" className="footer_produits_panier">Mon Panier</a></li>
                        <li><Link to="/livraison-et-retour" className="footer_produits_livraison">Livraison & Retour</Link></li>
                    </ul>
                    <ul className="rs">
                        <li><a href="https://www.instagram.com/maison_du_revetement/"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100089922982015"><i className="fa-brands fa-facebook-f"></i></a></li>
                    </ul>   
                </div>
                <div className="footer_contact">
                    <h4>Contacts</h4>
                    <ul>
                        <li className="footer_contact_formulaire"><a href="https://maisondurevetement.odoo.com/contact">Formulaire de contact</a></li>
                        <li className="footer_contact_telephone"><p>Téléphone :</p><a href="tel:+33156555526">+331.56.55.55.26</a></li>
                        <li className="footer_contact_email"><p>Email :</p><a href="mailto:support@maisondurevetement.com">support@maisondurevetement.com</a></li>
                        <li className="footer_contact_showroom"><p>Adresse du Showroom :</p><a href="https://www.google.com/maps/place/Maison+du+Rev%C3%AAtement,+23+Av.+du+Chemin+des+Reniers,+92390+Villeneuve-la-Garenne/@48.9326753,2.3242003,17z/data=!4m6!3m5!1s0x47e66fe73242f781:0xfce1191e0496d851!8m2!3d48.9326753!4d2.3242003!16s%2Fg%2F11s7qzn61f">23 Avenue du Chemin des Reniers<br />92390 Villeneuve-la-Garenne</a></li>
                    </ul>
                </div>
            </section>
            <section className="footer_end">
                <div>
                    <p>© Maison du Revêtement</p>
                </div>
                <div>
                    <Link to="/conditions-generales-de-vente">Conditions générales de vente</Link>
                </div>
                <div className="footer_logo">
                    <img src={PetitLogo} alt="Petit Logo Maison du Revêtement"/>
                </div>
                <div>
                    <Link to="/mentions-légales">Mentions légales</Link>
                </div>
                <div>
                    <p>2023</p>
                </div>
            </section>
        </footer>
    )
}