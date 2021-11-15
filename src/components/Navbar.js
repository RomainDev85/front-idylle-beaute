import React, { useContext } from 'react';
import { NavigationContext } from '../context/NavigationContext';
import { ScrollPositionContext } from '../context/ScrollPositionContext';
import { motion } from 'framer-motion';


export default function Navbar() {

    const { setMenu, menu } = useContext(NavigationContext)
    const { setScrollPosition } = useContext(ScrollPositionContext)

    function handleClick(){
        if(menu){
            setMenu(false)
        }
        else {
            setMenu(true)
            setScrollPosition(window.scrollY)
        }
    }

    return (
        <>
            <nav className={menu ? 'navigation-open' : ''}>
                <div className="navbar">
                    <div className="entreprise">
                        
                        {menu ? 
                                <img src="./img/logo-idyllebeaute-clair.svg" alt=""/>
                            :
                                <img src="./img/logo-idyllebeaute-fonce.svg" alt=""/>
                        }

                        {/* <motion.h1 initial={{opacity:0, y: 10}} animate={{opacity:1, y:0, transition: {delay: .2}}}>Idylle Beauté</motion.h1>
                        <motion.h2 initial={{opacity:0, y: 10}} animate={{opacity:1, y:0, transition: {delay: .4}}}>Estheticienne</motion.h2> */}
                    </div>
                    <div className={menu ? 'menu-btn open' : 'menu-btn'} onClick={handleClick}>
                        <div className="menu-btn__burger"></div>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1636017220">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="custom-shape-divider-top-1636017339">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </nav>
            {/* <div className="undernav">
            </div> */}
        </>
    )
}