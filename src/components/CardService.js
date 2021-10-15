import React from 'react'
import { Link } from 'react-router-dom'

export default function CardService({title, image, link, placeImage}) {
    return (
        <div className={`carte-service ${placeImage}`}>
            <img src={"./img/carte-categorie/" + image} alt="categorie" />
            <div className="content">            
                <h3>{title}</h3>
                <span></span>
                <Link to={"/" + link } >Plus d'infos</Link>
            </div>
        </div>
    )
}
