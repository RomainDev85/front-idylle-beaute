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

    console.log(categories);

    // Check si l'id categorie est pair ou impaire
    function check(nbr){
        // chiffre pair
        if(nbr%2 === 0) return true; 
        //  chiffre impair
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
