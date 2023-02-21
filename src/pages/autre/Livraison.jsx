/* Modules */
import React from "react"

/* Components */
import Header from '../../components/Header'

/* Code */
export default function Livraison() {
    return (
        <>
            <header className="header">
                <Header />
            </header>
            <section className="pageLivraison">
                <div className="livraison">
                    <div className="livraison_titre">
                        <h2>Livraison</h2>
                    </div>
                    <span className="livraison_ligne"></span>
                    <div className="livraison_texte">
                        <div className="livraison_texte_livraison">
                            <p>Le délai d'expédition peuvent varier en fonction de la disponibilité des produits à savoir :<br />
                            - <strong>8 à 12 jours ouvrés</strong> pour les produits en stock<br />
                            - <strong>4 à 5 semaines</strong> pour les produits à la commande d'Italie<br />
                            - <strong>5 à 8 semaines</strong> pour les produits à la commande d'Espagne<br /><br />
                            Une fois votre commande passée, lorsque nous aurons des détails concernant la livraison, nous vous contacterons par email pour définir ensemble une date et heure de livraison qui vous correspond.
                            </p>
                            <p>Nous pouvons conserver gratuitement votre commande jusqu'à 3 mois maximum.</p>
                        </div>
                        <div className="livraison_texte_retrait">
                            <p>Votre commande sera à retirer à notre entrepôt situé au<br />
                            <strong>23 Avenue du Chemin des Reniers, 92390 Villeneuve-la-Garenne</strong>.
                            <br /></p>
                            <div class="maps">
                                <div class="maps_canvas">
                                    <iframe className="maps_img" src="https://maps.google.com/maps?q=25%20Avenue%20du%20Chemin%20des%20Reniers&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="livraison">
                    <div className="livraison_titre">
                        <h2>Coûts de livraison</h2>
                    </div>
                    <span className="livraison_ligne"></span>
                    <div className="livraison_couts">
                        <div className="livraison_couts_ileDeFrance">
                            <h3>Ile-de-France</h3>
                            <p>Dans la limite de 18 m² :<br />
                            <strong>49,00 €HT</strong> *
                            </p>
                            <p>Au-delà de 18 m² :<br />
                            <strong>79,00 €HT</strong> *
                            </p>
                        </div>
                        <div className="livraison_couts_france">
                            <h3>France Métropolitaine (hors Ile-de-France)</h3>
                            <p>Dans la limite de 18 m² :<br />
                            <strong>79,00 €HT</strong> *
                            </p>
                            <p>Au-delà de 18 m² :<br />
                            <strong>99,00 €HT</strong> *
                            </p>
                        </div>
                    </div>
                    <div className="livraison_titre">
                        <p>* Sous réserve que l'adresse de livraison inscrite respecte bien l'<strong>Etat / Province</strong> que vous renseignez.< br/>
                        La région <strong>Ile-de-France</strong> comporte les départements 75, 77, 78, 91, 92, 93, 94.< br/>
                        En cas d'erreur de saisie, nous vous remercions de revenir à l'étape précédente et ainsi saisir les bonnes informations pour recalcul des coûts de livraison.<br />
                        Si une erreur est toujours présente après validation de la commande, notre service est susceptible de vous recontacter par email ou par téléphone dans ce sens.</p>
                    </div>
                </div>
                <div className="livraison">
                    <div className="livraison_titre">
                        <h2>Annulation de commande & Retour de marchandises</h2>
                    </div>
                    <span className="livraison_ligne"></span>
                    <div className="livraison_texte">
                        <p>Annulation de commande :<br />
                        Une fois la commande passée sur notre site, vous avez la possibilité d’annuler votre commande pendant les SEPT (7) JOURS suivants.
                        Cette annulation doit faire l’objet d’une demande formulée via notre formulaire de contact ou directement par email à l’adresse suivante : support@maisondurevetement.com. Veuillez bien indiquer votre numéro de commande afin de pouvoir vous identifier facilement.
                        Toutefois, si une annulation nous parvenait alors que l'expédition ou la livraison est déjà effectuée, l'annulation ne serait pas prise en compte, la date d'enlèvement par le transporteur faisant foi.
                        Dans ce cas, le droit de rétractation peut éventuellement prendre le relai.<br /><br />
                        Droit de rétractation :<br />
                        Le droit de rétractation prend effet à la livraison de la commande et cela pour une durée de QUATORZE (14) JOURS.
                        Ce droit ne peut s’appliquer si les produits ou consommables livrés ont fait l’objet d’un usage même limité.
                        Après étude par nos services, si le droit de rétractation est applicable et uniquement si les produits sont dans un état d’origine permettant la revente, le client est chargé d’effectuer le retour à notre entrepôt par ses propres moyens.
                        Le retour des produits donnera alors lieu au remboursement des produits et non de la commande, c’est-à-dire en excluant les éventuels coûts de livraison et de retour.<br />
                        Vous pouvez consulter les conditions générales de vente disponibles sur le site pour tout complément d’informations.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}