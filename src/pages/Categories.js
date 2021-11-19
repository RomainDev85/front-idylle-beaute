import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router';
import  { Redirect } from 'react-router-dom'
import HeaderCategory from '../components/HeaderCategory';
import ListServices from '../components/ListServices';
import { FirstLoadingContext } from '../context/FirstLoading';
import ActionCategoryPage from '../components/ActionCategoryPage';

export default function Categories() {

    const { category } = useParams();
    const [loadInfo, setLoadInfo] = useState(true);
    const [categories, setCategories] = useState(null);
    const { setFirstLoading } = useContext(FirstLoadingContext)



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories/${ category }`)
        .then(res => {
            if(res.data){
                setCategories(res.data)
                setLoadInfo(false)
            }
            setLoadInfo(false)
            setFirstLoading(false);
        })
    }, [category, setFirstLoading])

    if(loadInfo === false && categories === null){
        return <Redirect to='/'  />
    }
    return (
        <>
            < HeaderCategory />
            < ListServices />
            < ActionCategoryPage/>
        </>
    )
}
