import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FirstLoadingContext } from '../context/FirstLoading';

export default function Header() {

    const { firstLoading } = useContext(FirstLoadingContext)

    return (

        <section className="header">
            <img className="fleur-haut" src="./img/fleur-haut.png" alt="fleur"/>
            <motion.h1 initial={firstLoading ? {opacity:0, y: -10} : {}} animate={{opacity:1, y:0, transition: {delay: .5}}}>L'aiguillon sur vie</motion.h1>
            <motion.img className="logo" src="./img/logo-idyllebeaute-fonce.svg" alt="logo idylle beaute" initial={firstLoading ? {opacity:0, y: 10} : {}} animate={{opacity:1, y:0, transition: {delay: .7}}}/>
            <motion.div className="header-btn" initial={firstLoading ? {opacity:0, y: 10} : {}} animate={{opacity:1, y:0, transition: {delay: .9}}}>
                <a href="/#services">Prestations</a>
                <a href="/#contact">Contactez-moi</a>
            </motion.div>
        </section>
    )
}
