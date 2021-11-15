import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FirstLoadingContext } from '../context/FirstLoading';

export default function Header() {

    const { firstLoading } = useContext(FirstLoadingContext)

    return (

        <section className="header">
            <img className="fleur-haut" src="./img/fleur-haut.png" alt="fleur"/>
            <h1>L'aiguillon sur vie</h1>
            <img className="logo" src="./img/logo-idyllebeaute-fonce.svg" alt="logo idylle beaute"/>
            <div className="header-btn">
                <a href="/#prestations">Prestations</a>
                <a href="/#contact">Contactez-moi</a>
            </div>
        </section>
    )
}
