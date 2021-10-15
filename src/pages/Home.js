import React from 'react'
import AllCardService from '../components/AllCardService'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Presentation from '../components/Presentation'

export default function Home() {
    return (
        <>
            < Header />
            < Presentation />
            < AllCardService />
            < Contact />
        </>
    )
}
