import React, { useContext } from 'react';
import { NavigationContext } from '../context/NavigationContext';
import { motion } from 'framer-motion';


export default function Navbar() {

    const { setMenu, menu } = useContext(NavigationContext)

    function handleClick(){
        if(menu){
            setMenu(false)
        }
        else {
            setMenu(true)
        }
    }

    return (
        <nav className={menu ? 'navigation-open' : ''}>
            <div className="navbar">
                <div className="entreprise">
                    <motion.h1 initial={{opacity:0, y: 10}} animate={{opacity:1, y:0, transition: {delay: .2}}}>Idylle Beauté</motion.h1>
                    <motion.h2 initial={{opacity:0, y: 10}} animate={{opacity:1, y:0, transition: {delay: .4}}}>Estheticienne</motion.h2>
                </div>
                <motion.div className={menu ? 'menu-btn open' : 'menu-btn'} onClick={handleClick} initial={{opacity:0}} animate={{opacity:1, transition: {delay: .2}}}>
                    <div className="menu-btn__burger"></div>
                </motion.div>
            </div>
        </nav>
    )
}