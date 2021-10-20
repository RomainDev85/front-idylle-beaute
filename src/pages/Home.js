import React, { useEffect, useContext } from 'react'
import AllCardService from '../components/AllCardService'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import { FirstLoadingContext } from '../context/FirstLoading'

export default function Home() {
    
    const { setFirstLoading } = useContext(FirstLoadingContext)

    useEffect(() => {
        setTimeout(() => {
            setFirstLoading(false)
        }, 2000)
    }, [setFirstLoading])

    return (
        <>
            < Header />
            < Presentation />
            < AllCardService />
            < Contact />
        </>
    )
}
