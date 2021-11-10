import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { isEmpty } from '../Utils';
import LittleCategorie from './LittleCategorie';
import OneService from './OneService'

export default function ListServices() {
    const { category } = useParams();
    const [loadInfo, setLoadInfo] = useState(true);
    const [services, setServices] = useState(null);
    const [littleCategories, setLittleCategories] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories/littlecategory/${category}`)
        .then((res) => {
            setLittleCategories(res.data)
        })
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/services/${category}`)
        .then(res => {
            setServices(res.data)
            setLoadInfo(false)
        })
    }, [loadInfo, category, services])


    return (
        <>
        <div className="list-prestations">
            <ul>
                {!isEmpty(services) && services.map(service => (
                    < OneService 
                        key={service.prestation_id} 
                        title={service.nom_prestation} 
                        price={service.price} 
                        description={service.description}
                        time={service.duree}
                    />
                ))}
            </ul>
        </div>
        {!isEmpty(littleCategories) && littleCategories.length > 0 && littleCategories.map(categories => (
                <LittleCategorie key={categories.id} littleCategory={categories.sous_categorie} id={categories.id}/>
            ))
        }
        </>
    )
}
