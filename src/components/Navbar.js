import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    let history = useHistory();

    function handleClick(){
        if(menuOpen){
            setMenuOpen(false)
            history.goBack()
        }
        else {
            setMenuOpen(true)
            history.push("/menu")
        }
    }

    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="entreprise">
                        <h1>Idylle Beauté</h1>
                        <h2>Estheticienne</h2>
                    </div>
                    <div className={menuOpen ? 'menu-btn open' : 'menu-btn'} onClick={handleClick}>
                        <div className="menu-btn__burger"></div>
                    </div>
                </div>


            </nav>
            {/* <div className="undernavbar"></div> */}
        </>
    )
}