import React, { useEffect, useContext } from 'react'
import AllCardService from '../components/AllCardService'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import { FirstLoadingContext } from '../context/FirstLoading'
import { NavigationContext } from '../context/NavigationContext'
// import { ScrollPositionContext } from '../context/ScrollPositionContext'
import Menu from '../components/Menu'

export default function Home() {
    
    const { setFirstLoading } = useContext(FirstLoadingContext);
    const { menu } = useContext(NavigationContext);
    // const { scrollPosition } = useContext(ScrollPositionContext);
    

    useEffect(() => {
        // window.scrollTo(0, scrollPosition, 'instant')
        setTimeout(() => {
            setFirstLoading(false)
        }, 1000)
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
