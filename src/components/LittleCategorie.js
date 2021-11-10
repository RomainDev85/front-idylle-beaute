import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { isEmpty } from '../Utils'

export default function LittleCategorie({ id, littleCategory}) {

    const [services, setServices] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/services/littlecategory/${id}`)
        .then(res => {
            setServices(res.data)
        })
    }, [id])

    return (
        <div className="little-category">
            <h3>{ littleCategory }</h3>
            <ul>
                {!isEmpty(services) && services.map(service => 
                    <li key={service.id_prestation}>
                        <div className="left">
                            <h4>{ service.nom_service }</h4>
                            {service.description && <p>{ service.description }</p>}
                        </div>
                        <div className="right">
                            <h4>{  service.price % 1 !== 0 ? service.price.toFixed(2) : service.price } €</h4>
                            { service.duree && <p>{ service.duree }</p> }
                        </div>
                    </li>   
                )}
            </ul>
        </div>
    )
}
