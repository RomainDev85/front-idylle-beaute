import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

export default function ActionCategoryPage() {
    
    const [loadData, setLoadData] = useState(true);
    const [otherCategories, setOtherCategories] = useState(null)
    const { category } = useParams();
    const [btnDirection, setBtnDirection] = useState(false);

    function handleClick(){
        if(btnDirection){
            setBtnDirection(false)
            window.scrollTo(0, 0)
        }
        else setBtnDirection(true)
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories/exept/${category}`)
        .then((res) => {
            setOtherCategories(res.data)
            setLoadData(false)
        })
    }, [category])

    console.log(otherCategories);

    return (
        <section className="action-page-category">
            <HashLink smooth to="/#contact">Contact</HashLink>
            <div className="btn-other-service" style={btnDirection ? {display: 'none'} : {display: 'flex'}}>
                <h4 onClick={handleClick}>Autres prestations</h4>
            </div>
            <ul style={btnDirection ? {display: 'flex'} : {display: 'none'}}>
                {!loadData && otherCategories.map((category) => (<li key={category.url_categorie}><Link to={category.url_categorie} onClick={handleClick}>{category.nom}</Link></li>))}
            </ul>
        </section>
    )
}
