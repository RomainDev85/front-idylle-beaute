import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import  { Redirect } from 'react-router-dom'
import HeaderCategory from '../components/HeaderCategory';

export default function Categories() {

    const { category } = useParams();
    const [loadInfo, setLoadInfo] = useState(true);
    const [categories, setCategories] = useState(null);
    // const [info, setInfo] = useState(null);

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
        < HeaderCategory />
    )
}
