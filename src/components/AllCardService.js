import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardService from './CardService';
import { isEmpty } from '../Utils';

export default function AllCardService() {

    const [loadCategories, setloadCategories] = useState(true);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        if(loadCategories){
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories`)
            .then(res => {
                setCategories(res.data)
            })
            .then(setloadCategories(false))
        }
    }, [loadCategories])

    // check if category can be equal split or not
    function check(nbr){
        // can be split
        if(nbr%2 === 0) return true; 
        //  cant be split
        else return false;
   }

    return (
        <section className="services" id="services">
            {!isEmpty(categories) &&
                categories.map((category) => (
                    <CardService
                        title={category.nom}
                        image={category.image}
                        urlCategory={category.url_categorie}
                        placeImage={check(category.id) ? "first" : "second"}
                        key={category.id}
                    />
                ))
            }
        </section>
    )
}
