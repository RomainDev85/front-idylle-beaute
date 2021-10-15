import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardService from './CardService';

export default function AllCardService() {

    const [loadCategories, setloadCategories] = useState(true);
    const [categories, setCategories] = useState();

    useEffect(() => {
        if(loadCategories){
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories`)
            .then(res => {
                setCategories(res.data)
            })
            .then(setloadCategories(false))
        }
    }, [loadCategories, categories])

    console.log(categories);

    return (
        <section className="services" id="service">
            {categories.map(category => (
                <CardService />
            ))}
        </section>
    )
}
