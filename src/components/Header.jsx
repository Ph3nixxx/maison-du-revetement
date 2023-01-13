/* Images */
import Logo from "../assets/logo3.gif";
import Video from "../assets/site.MOV";

export default function Header() {
    return (
        <header class="header">
            <video src={Video} type="video/mov" autoplay muted loop ></video>
            <div class="header_nav">
                <nav class="header_gauche">
                    <div class="megamenu">
                        <button class="megamenu_button">Nos Produits
                            <i class="fa-solid fa-caret-down"></i>
                        </button>
                        <div class="categories">
                            <div class="categories_parquet">
                                <a href="#"><h3>Parquet</h3></a>
                                <a href="#">Massif</a>
                                <a href="#">Contrecollé</a>
                                <a href="#">Stratifié</a>
                                <a href="#">PVC</a>
                            </div>
                            <div class="categories_carrelage">
                                <a href="#"><h3>Carrelage</h3></a>
                                <a href="#">Sol</a>
                                <a href="#">Mural</a>
                                <a href="#">Mosaïque</a>
                                <a href="#">Pièces Spéciales</a>
                            </div>
                            <div class="categories_sanitaire">
                                <a href="#"><h3>Sanitaire</h3></a>
                                <a href="#">Robineterie</a>
                                <a href="#">Meubles Salle de Bain</a>
                            </div>
                        </div>
                    </div>
                    <a href="#">Nos Conseils</a>
                </nav>
                <div class="header_logo">
                    <a href="./index.html">
                        <img src={Logo} alt="logo Maison du Revêtement"/>
                    </a>
                </div>
                <div class="header_droite">
                    <div class="header_droite_onglets">
                        <a href="#">Nous Contacter</a>
                        <a href="#">Espace Client / Pro</a>
                    </div>
                    <div class="header_droite_icones">
                        <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="#"><i class="fa-solid fa-user"></i></a>
                        <a href="tel:+33156555526"><i class="fa-solid fa-phone"></i></a>
                    </div>
                </div>
            </div>
        </header>
    )
}