import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
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
        <section className="menu-navigation" key="menu" initial={{opacity: 0, y: -800}} animate={{opacity: 1, y: 0, transition: {duration: .3}}} exit={{opacity: 0, y: -800}}>
            <ul>
                <li><HashLink smooth to="/#institut" onClick={handleClick}><i className="far fa-star"></i>Institut</HashLink></li>
                <li><HashLink to="/#produit" onClick={handleClick}><i className="far fa-star"></i>Nos produits</HashLink></li>
                <li><HashLink smooth to="/#prestations" onClick={handleClick}><i className="far fa-star"></i>Nos prestations</HashLink></li>
                <li><HashLink smooth to="/#contact" onClick={handleClick}><i className="far fa-star"></i>Contact</HashLink></li>
            </ul>
        </section>
    )
}
