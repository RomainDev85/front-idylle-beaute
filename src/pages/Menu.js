import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { animationMenu, transitionMenu } from '../animations/animation';
import { NavigationContext } from '../context/NavigationContext';

export default function Menu() {

    const { menu, setMenu } = useContext(NavigationContext);

    function handleClick(){
        if(menu){
            setMenu(false)
        }
        else {
            setMenu(true)
        }
    }

    return (  
        <motion.section className="menu-navigation" initial='out' animate='in' exit='out' variants={animationMenu} transition={transitionMenu}>
            <ul>
                <li><HashLink smooth to="/#institut" onClick={handleClick}><i className="far fa-star"></i>Institut</HashLink></li>
                <li><HashLink smooth to="/#produit" onClick={handleClick}><i className="far fa-star"></i>Nos produits</HashLink></li>
                <li><HashLink smooth to="/#services" onClick={handleClick}><i className="far fa-star"></i>Nos prestations</HashLink></li>
                <li><HashLink smooth to="/#contact" onClick={handleClick}><i className="far fa-star"></i>Contact</HashLink></li>
            </ul>
        </motion.section>
    )
}
