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
                <h2>Edition du site</h2>
                <div className="mentionsLegales_edition">
                    <p className="p_un">
                    <strong>TVA</strong> : FR43917977035<br /><br />
                    <strong>ADRESSE COMMERCIALE</strong><br />
                    23 Avenue du Chemin des Reniers<br />
                    92 390 Villeneuve-la-Garenne<br /><br />
                    <strong>SIÈGE SOCIAL</strong><br />
                    92 Rue Baudin<br />
                    92300 Levallois-Perret<br /><br />
                    <strong>SIRET</strong> : 917 977 035 00018<br />
                    <strong>SIREN</strong> : 917 977 035<br />
                    R.C.S. NANTERRE B : 917 977 035<br />
                    APE : 4674A
                    </p>
                </div>
                <h2>Hébergement  du site</h2>
            </section>
        </>
    )
};