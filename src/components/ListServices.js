import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { isEmpty } from '../Utils';
import OneService from './OneService'

export default function ListServices() {
    const { category } = useParams();
    const [loadInfo, setLoadInfo] = useState(true);
    const [services, setServices] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/services/${category}`)
        .then(res => {
            setServices(res.data)
            setLoadInfo(false)
        })
    }, [loadInfo, category])

    console.log(services);

    return (
        <div className="list-prestations">
            <ul>
                {!isEmpty(services) && services.map(service => (
                    < OneService key={service.prestation_id} title={service.nom_prestation} price={service.price} />
                ))}
            </ul>
        </div>
    )
}
