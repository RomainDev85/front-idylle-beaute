import React, { useEffect, useContext } from 'react'
import AllCardService from '../components/AllCardService'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import { FirstLoadingContext } from '../context/FirstLoading'
import { NavigationContext } from '../context/NavigationContext'
import Menu from '../components/Menu'

export default function Home() {
    
    const { setFirstLoading } = useContext(FirstLoadingContext);
    const { menu } = useContext(NavigationContext);
    

    useEffect(() => {
        setTimeout(() => {
            setFirstLoading(false)
        }, 1000)
    })

    // console.log(document.getElementById("prestations"));
    // console.log(document.getElementById("contact"));
    
    if(document.getElementById("contact")) console.log(document.getElementById("contact").clientHeight);
    if(document.getElementById("prestations")) console.log(document.getElementById("prestations").clientHeight);
            
    return (
        <>
        {menu ? 
            <Menu/>
        : 
            <>
                < Header />
                < Presentation />
                < AllCardService />
                < Contact />
            </>
        }
        </>
    )
}
