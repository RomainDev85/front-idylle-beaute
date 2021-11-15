import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';


export default function Header() {

    const { category } = useParams();
    const [loadInfo, setLoadInfo] = useState(true);
    const [categories, setCategories] = useState(null);
    const [littleScreen, setLittleScreen] = useState(null);

    useEffect(() => {   
        
        if(window.innerWidth < 800) setLittleScreen(true)
        else setLittleScreen(false)


        axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories/${ category }`)
        .then((res) => {
            if(res.data){
                setCategories(res.data)
                setLoadInfo(false)
            }
        })
        .catch((err) => console.log(err))


        const screen = () => {
            if(window.innerWidth < 800) setLittleScreen(true)
            else setLittleScreen(false)
        }
        window.addEventListener("resize", screen)

        // Au moment du demontage du composant arrete d'ecoute la taille de la fenetre
        return () => window.removeEventListener("resize", screen)


    }, [loadInfo, category])


    if(loadInfo === false){

        const word = categories.nom
        const wordSplit = word.split("");
        // Generate random number
        function randomNumber(min, max) { // min and max included 
            return `0.${Math.floor(Math.random() * (max - min + 1) + min)}`
        }

        return (
            <section className="header-categorie" key="header-categorie">
                <h2>{wordSplit.map((letter, index) => (<span key={index}>{letter}</span>))}</h2>
                    {!littleScreen ? 
                        <div className="image-desktop" initial={{opacity: 0, y:40}} animate={{opacity: 1, y: 0, transition: {delay: .3}}} exit={{opacity: 0, y:40}}>
                            <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "1.jpg" } alt="categorie" id="img1"/>
                            <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "2.jpg" } alt="categorie" id="img2"/>
                            <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "3.jpg" } alt="categorie" id="img3"/>
                            <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "4.jpg" } alt="categorie" id="img4"/>
                            <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "5.jpg" } alt="categorie" id="img5"/>
                        </div>
                        
                        :
           
                        <div className="image-mobile">
                            <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "1.jpg" } alt="categorie" id="img1"/>
                            <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "2.jpg" } alt="categorie" id="img2"/>
                            <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "3.jpg" } alt="categorie" id="img3"/>
                            <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "4.jpg" } alt="categorie" id="img4"/>
                            <img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "5.jpg" } alt="categorie" id="img5"/>
                        </div>             
                    }
            </section>
        )
    }
    return (
        <section className="header-categorie">
            <span className="loader" style={{marginTop: "200px"}}></span>
        </section>
    )
}