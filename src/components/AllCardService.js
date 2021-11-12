import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardService from './CardService';

export default function AllCardService() {

    const [loadCategories, setloadCategories] = useState(true);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        if(loadCategories){
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories`)
            .then(res => {
                setCategories(res.data)
                setloadCategories(false)
            })
        }

    }, [categories, loadCategories])

    // Check if id category can be equal split
    function check(nbr){
        // can be
        if(nbr%2 === 0) return true; 
        //  cant be
        else return false;
   }

   if(loadCategories === false){
       return (
           <section className="services" id="prestations">
               {categories.map((category,index) => (
                       <CardService
                           title={category.nom}
                           image={category.image}
                           urlCategory={category.url_categorie}
                           placeImage={check(index) ? "second" : "first"}
                           key={category.id}
                       />
                   ))
               }
           </section>
       )
   }
    return (
        <section className="services" id="prestations">
            <span className="loader" style={{margin: "20px"}}></span>
        </section>
    )
}
