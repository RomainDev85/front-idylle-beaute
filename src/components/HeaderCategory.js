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

        const screen = (e) => {
            e.preventDefault();
            if(window.innerWidth < 800) setLittleScreen(true)
            else setLittleScreen(false)
        }

        window.addEventListener("resize", screen, { passive: true })

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
                <h2>{wordSplit.map((letter, index) => (<motion.span key={index} initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0, transition: {delay: randomNumber(5,9), duration: .5}}} exit={{opacity: 0, y: 40}}>{letter}</motion.span>))}</h2>
                    {!littleScreen ? 
                        <motion.div className="image-desktop" initial={{opacity: 0, y:40}} animate={{opacity: 1, y: 0, transition: {delay: .3}}} exit={{opacity: 0, y:40}}>
                            <motion.img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "1.jpg" } initial={{opacity:0, x:-500, rotate:180}} animate={{opacity: 1, x: 0, rotate: 6, transition: {duration: .3, delay: .2}}} exit={{opacity:0, x:-500, rotate:180}} alt="categorie" id="img1"/>
                            <motion.img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "2.jpg" } initial={{opacity:0, x:-500, y: 300, rotate:-180}} animate={{opacity: 1, y:0, x:0, rotate: -9, transition: {duration: .3, delay: .3}}} exit={{opacity:0, x:-500, rotate:180}} alt="categorie" id="img2"/>
                            <motion.img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "3.jpg" } initial={{opacity:0, x:-500, y: -200, rotate:60}} animate={{opacity: 1, y:0, x:0, rotate: -10, transition: {duration: .3}}} exit={{opacity:0, x:-500, rotate:180}} alt="categorie" id="img3"/>
                            <motion.img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "4.jpg" } initial={{opacity:0, x:-500, y: 350, rotate:-90}} animate={{opacity: 1, y:0, x:0, rotate: -3, transition: {duration: .3, delay: .2}}} exit={{opacity:0, x:-500, rotate:180}} alt="categorie" id="img4"/>
                            <motion.img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "5.jpg" } initial={{opacity:0, x:-500, y: 250, rotate:120}} animate={{opacity: 1, y:0, x:0, rotate: 10, transition: {duration: .3, delay: 0}}} exit={{opacity:0, x:-500, rotate:180}} alt="categorie" id="img5"/>
                        </motion.div>
                        
                        :
           
                        <motion.div className="image-mobile" initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0, transition: {delay: .3}}} exit={{opacity: 0, y: 40}}>
                            <motion.img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "1.jpg" } alt="categorie" id="img1"/>
                            <motion.img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "2.jpg" } alt="categorie" id="img2"/>
                            <motion.img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "3.jpg" } alt="categorie" id="img3"/>
                            <motion.img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "4.jpg" } alt="categorie" id="img4"/>
                            <motion.img src={"./img/" + categories.url_categorie + "/" + categories.url_categorie + "5.jpg" } alt="categorie" id="img5"/>
                        </motion.div>             
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