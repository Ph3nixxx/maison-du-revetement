/* Modules */
import React from "react"
import { Link } from 'react-router-dom'

/* Images */
import PetitLogo from "../assets/mdr_logo.png";

export default function Footer() { 
    return (
        <footer className="footer">
            <section className="footer_list">
                <ul className="footer_produits">
                    <h4>Produits</h4>
                    <div className="footer_produits_texte">
                        <li><Link to="/produits/carrelage" className="footer_produits_carrelage">Carrelage</Link></li>
                        <li><Link to="/produits/parquet" className="footer_produits_parquet">Parquet</Link></li>
                        <li><Link to="/produits/sanitaire" className="footer_produits_sanitaire">Sanitaire</Link></li>
                    </div>
                </ul>
                <ul className="footer_services">
                    <h4>Services</h4>
                    <div className="footer_produits_texte">
                        <li><a href="https://maisondurevetement.odoo.com/web/login" className="footer_produits_espace">Espace Client</a></li>
                        <li><a href="https://maisondurevetement.odoo.com/cart" className="footer_produits_panier">Mon Panier</a></li>
                        <li><Link to="/livraison-et-retour" className="footer_produits_livraison">Livraison & Retour</Link></li>
                        </div>
                    <div className="instagram"><li><a href="https://www.instagram.com/maison_du_revetement/"><i className="fa-brands fa-instagram fa-3x"></i></a></li></div>
                </ul>
                <ul className="footer_contact">
                    <h4>Contacts</h4>
                    <li className="footer_contact_formulaire"><a href="https://maisondurevetement.odoo.com/contact">Formulaire de contact</a></li>
                    <li className="footer_contact_telephone"><p>Téléphone :</p><a href="tel:+33156555526">+331.56.55.55.26</a></li>
                    <li className="footer_contact_email"><p>Email :</p><a href="mailto:support@maisondurevetement.com">support@maisondurevetement.com</a></li>
                    <li className="footer_contact_showroom"><p>Adresse du Showroom :</p><a href="https://www.google.com/maps/place/23+Av.+du+Chemin+des+Reniers,+92390+Villeneuve-la-Garenne/@48.9320118,2.3184177,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66f29544b65ad:0xed3fc5ba72f11c39!8m2!3d48.9320084!4d2.3229024">23 Avenue du Chemin des Reniers<br />92390 Villeneuve-la-Garenne</a></li>
                </ul>
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