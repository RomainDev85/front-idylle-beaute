import React, { useEffect, useContext, useState } from 'react'
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
    const [screenY, setScreenY] = useState(0)
    

    useEffect(() => {
        setTimeout(() => {
            setFirstLoading(false)
        }, 2000)
    }, [setFirstLoading])


    window.addEventListener("scroll", () => {
        if(!menu) setScreenY(window.scrollY)
    })
    
            
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
