import React, { useContext } from 'react';
import { NavigationContext } from '../context/NavigationContext';
import { useHistory } from "react-router-dom";

export default function Navbar() {

    const { setMenu, menu } = useContext(NavigationContext)
    let history = useHistory();

    function handleClick(){
        if(menu){
            setMenu(false)
            history.goBack()
        }
        else {
            setMenu(true)
            history.push("/menu")
        }
    }

    return (
        <>
            <nav className={menu ? 'navigation-open' : ''}>
                <div className="navbar">
                    <div className="entreprise">
                        <h1>Idylle Beauté</h1>
                        <h2>Estheticienne</h2>
                    </div>
                    <div className={menu ? 'menu-btn open' : 'menu-btn'} onClick={handleClick}>
                        <div className="menu-btn__burger"></div>
                    </div>
                </div>


            </nav>
            {/* <div className="undernavbar"></div> */}
        </>
    )
}