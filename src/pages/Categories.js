import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router';
import  { Redirect } from 'react-router-dom'
import HeaderCategory from '../components/HeaderCategory';
import ListServices from '../components/ListServices';
import { NavigationContext } from '../context/NavigationContext'
import Menu from '../components/Menu';

export default function Categories() {

    const { category } = useParams();
    const [loadInfo, setLoadInfo] = useState(true);
    const [categories, setCategories] = useState(null);
    const { menu } = useContext(NavigationContext)



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories/${ category }`)
        .then(res => {
            if(res.data){
                setCategories(res.data)
                setLoadInfo(false)
            }
            setLoadInfo(false)
        })
    }, [category])

    if(loadInfo === false && categories === null){
        return <Redirect to='/'  />
    }
    return (
        <>
        {menu ? <Menu/> : 
            <>
                < HeaderCategory />
                < ListServices />
            </>
        }
        </>
    )
}
