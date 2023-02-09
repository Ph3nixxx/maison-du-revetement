/* Modules */
import React from "react"
import { Link } from 'react-router-dom'

/* Images */
import PetitLogo from "../assets/logo2.png";

export default function Footer() { 
    return (
        <footer className="footer">
            <section className="footer_list">
                <ul className="footer_produits">
                    <h4>Produits</h4>
                    <li><Link to="/produits/carrelage" className="footer_produits_carrelage">Carrelage</Link></li>
                    <li><Link to="/produits/parquet" className="footer_produits_parquet">Parquet</Link></li>
                    <li><Link to="/produits/sanitaire" className="footer_produits_sanitaire">Sanitaire</Link></li>
                    <li><Link to="/produits/autre" className="footer_produits_autre">Autre</Link></li>
                </ul>
                <ul className="footer_produits">
                    <h4>Services</h4>
                    <li><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/web/login" className="footer_produits_espace">Espace Client</a></li>
                    <li><a href="https://maisondurevetement-15-0-staging-1-7033407.dev.odoo.com/shop/cart" className="footer_produits_panier">Mon Panier</a></li>
                    <li><Link to="/livraison-et-retour" className="footer_produits_livraison">Livraison & Retour</Link></li>
                    <div className="instagram"><li><a href="https://www.instagram.com/maison_du_revetement/"><i className="fa-brands fa-instagram fa-3x"></i></a></li></div>
                </ul>
                <ul className="footer_contact">
                    <h4>Contacts</h4>
                    <li className="footer_contact_formulaire"><a href="https://maisondurevetement.odoo.com/contact">Formulaire de contact</a></li>
                    <li className="footer_contact_telephone"><p>Téléphone :</p> +331.56.55.55.26</li>
                    <li className="footer_contact_email"><p>Email :</p> support@maisondurevetement.com</li>
                    <li className="footer_contact_showroom"><p>Adresse du Showroom :</p>23 Avenue du Chemin des Reniers <br />92390 Villeneuve-la-Garenne</li>
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