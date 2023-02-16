/* Modules */
import React from "react"

/* Components */
import Header from '../../components/Header'

/* Code */
export default function MentionsLegales() {
    return (
        <>
            <Header />
            <section className="mentionsLegales">
                <h1>Mentions Légales</h1>
                <span className="mentionsLegales_ligne"></span>
                <h2>Édition du site</h2>
                <div className="mentionsLegales_edition">
                    <p className="p_un">
                    <strong>Maison du Revêtement</strong><br />
                    Société par actions simplifiée au capital de 210 600 euros.<br /><br />
                    <strong>ADRESSE COMMERCIALE</strong><br />
                    23 Avenue du Chemin des Reniers<br />
                    92 390 Villeneuve-la-Garenne<br /><br />
                    <strong>SIÈGE SOCIAL</strong><br />
                    92 Rue Baudin<br />
                    92300 Levallois-Perret<br /><br />
                    <strong>SIRET</strong> : 917 977 035 00018<br />
                    <strong>SIREN</strong> : 917 977 035<br />
                    R.C.S. NANTERRE B : 917 977 035<br />
                    APE : 4674A<br />
                    <strong>TVA</strong> : FR43917977035<br /><br />
                    Le directeur de la publication est Kevin SITBON.<br />
                    </p>
                    <h2>Hébergement du site</h2>
                    <p>Les pages de ce site internet ont été créées :<br />
                    - directement par l'entreprise Maison du Revêtement ;<br />
                    - par la société ODOO (en ce qui concerne les pages "articles", "panier", "espace personnel" notamment).<br /><br />
                    La gestion et l’hébergement du site est assurée par :<br />
                    - la société GANDI.NET ;<br />
                    - l'entreprise ODOO (pour leurs pages dédiées).
                    </p>
                    <h2>Réglement Général de la Protection des Données</h2>
                    <p> Vos informations personnelles sont recueillies exclusivement via les formulaires de ce site internet. Elles sont enregistrées dans un fichier informatisé par l'hebergeur du site indiqué ci-dessus, dans le but que Maison du Revêtement procède à la livraison de vos commandes dans les meilleures conditions.<br />
                    Ces informations, dont la fourniture est obligatoire, sont indiquées par un astérisque :<br />
                    - nom et prénom (nom de la société le cas échéant) ;<br />
                    - adresse email ;<br />
                    - téléphone (à contacter en cas de besoin) ;<br />
                    - numéro et rue de livraison ;<br />
                    - code postal de livraison ;<br />
                    - ville de livraison ;<br />
                    - pays de livraison ;<br />
                    - Etat / Province de livraison (cette information nous permet de calculer précisément le coût de livraison, nous vous remercions de modifier votre adresse de livraison si besoin pour recalcul des coûts de livraison, confère la page "Livraison & Retour" pour davantage d'informations).<br />
                    Le reste des informations sont facultatives mais peuvent permettre à faciliter le traitement de votre demande.<br />
                    Les informations personnelles collectées ne sont en aucun cas confiées à des tiers hormis pour l’éventuelle bonne exécution de la prestation commandée par l’internaute. Les informations ne sont pas transférées en dehors de l’Union Européenne.<br />
                    Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données. Dans ce cas, pour faire valoir ces droits, nous vous invitons à nous envoyer un email à l’adresse email suivante : support@maisondurevetement.com, en nous faisant parvenir une pièce d'identité valide. Nos services se chargeront de traiter votre demande dans un délai d’un mois à compter de la réception de celle-ci.<br />
                    Consultez le site www.cnil.fr pour plus d’informations sur vos droits.<br />
                    Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.<br />
                    </p>
                </div>
            </section>
        </>
    )
};