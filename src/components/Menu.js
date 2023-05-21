import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { NavigationContext } from '../context/NavigationContext';

export default function Menu() {

    const { menu, setMenu } = useContext(NavigationContext);

    function handleClick(e){
        console.log(e);
        if(menu){
            setMenu(false)
        }
        else {
            setMenu(true)
        }
    }

    return (
        <motion.section className="menu-navigation" key="menu" initial={{opacity: 0, y: -800}} animate={{opacity: 1, y: 0, transition: {duration: .3}}} exit={{opacity: 0, y: -800}}>
            <ul>
                <motion.li initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0, transition: {delay: 0.2}}} exit={{opacity: 0, y: 40}}><HashLink smooth to="/#institut" id="institut" onClick={handleClick}><i className="far fa-star"></i>Institut</HashLink></motion.li>
                <motion.li initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0, transition: {delay: 0.3}}} exit={{opacity: 0, y: 40}}><HashLink smooth to="/#produit" id="produit" onClick={handleClick}><i className="far fa-star"></i>Nos produits</HashLink></motion.li>
                <motion.li initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0, transition: {delay: 0.4}}} exit={{opacity: 0, y: 40}}><HashLink smooth to="/#prestations" id="prestations" onClick={handleClick}><i className="far fa-star"></i>Nos prestations</HashLink></motion.li>
                <motion.li initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0, transition: {delay: 0.5}}} exit={{opacity: 0, y: 40}}><a href="https://www.planity.com/idylle-beaute-85220-laiguillon-sur-vie" onClick={handleClick}><i className="far fa-star"></i>Prendre rendez-vous</a></motion.li>
                <motion.li initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0, transition: {delay: 0.6}}} exit={{opacity: 0, y: 40}}><HashLink smooth to="/#contact" id="contact" onClick={handleClick}><i className="far fa-star"></i>Contact</HashLink></motion.li>
            </ul>
        </motion.section>
    )
}
