import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FirstLoadingContext } from '../context/FirstLoading';

export default function Header() {

    const { firstLoading } = useContext(FirstLoadingContext)

    return (
        <section className="header">
            <div className="header-content">
                <h2>
                    <motion.span className="first" initial={firstLoading ? {opacity:0, x: -50} : {}} animate={{opacity:1, x:0, transition: {delay: .5}}}>La beauté et le soin</motion.span>
                    <motion.span className="second" initial={firstLoading ? {opacity:0, x: 50} : {}} animate={{opacity:1, x:0, transition: {delay: .8}}}> à portée de main.</motion.span>
                </h2>
                <motion.div className="header-btn" initial={firstLoading ? {opacity:0, y: 50} : {}} animate={{opacity:1, y:0, transition: {delay: 1.4}}}>
                    <a href="/#services">Prestations</a>
                    <a href="/#contact">Contactez moi</a>
                </motion.div>
            </div>
            <div className="header-img">
                <motion.img src="./img/header-img.jpg" alt="" style={firstLoading ? {opacity: 0} : {}} inital={firstLoading ? {opacity:0} : {}} animate={{opacity:1, zIndex: 1, transition: {delay:1.1}}}/>
            </div>
        </section>
    )
}
