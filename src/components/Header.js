import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Header() {

    return (

        <section className="header">
            <img className="fleur-haut" src="./img/fleur-haut.png" alt="fleur"/>
            <h1>L'aiguillon sur vie</h1>
            <img className="logo" src="./img/logo-idyllebeaute-fonce.svg" alt="logo idylle beaute"/>
            <div className="header-btn">
                <HashLink smooth to="/#prestations">Prestations</HashLink>
                <a href="https://www.planity.com/idylle-beaute-85220-laiguillon-sur-vie">Prendre RDV</a>
            </div>
        </section>
    )
}
