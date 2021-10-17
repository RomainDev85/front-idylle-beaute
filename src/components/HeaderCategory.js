import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export default function Header() {

    const { category } = useParams();
    const [loadInfo, setLoadInfo] = useState(true);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories/${ category }`)
        .then(res => {
            if(res.data){
                setCategories(res.data)
                setLoadInfo(false)
            }
            setLoadInfo(false)
        })
    }, [loadInfo, category])
    // console.log("categories", categories);

    if(loadInfo === false){
        return (
            <section className="header-categorie">
                <h2>{ categories.nom }</h2>
                <div className="image">
                    <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "1.jpg" } alt="categorie" id="img1"/>
                    <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "2.jpg" } alt="categorie" id="img2"/>
                    <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "3.jpg" } alt="categorie" id="img3"/>
                    <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "4.jpg" } alt="categorie" id="img4"/>
                    <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "5.jpg" } alt="categorie" id="img5"/>
                </div>
            </section>
        )
    }
    return (
        <section className="header-categorie">
                <h2>Chargement</h2>
            </section>
    )
    
}