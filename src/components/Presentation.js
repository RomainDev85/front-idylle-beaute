import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FirstLoadingContext } from '../context/FirstLoading';

export default function Presentation() {

    const { firstLoading } = useContext(FirstLoadingContext);

    return (
        <section className="description">
            <h2>
                <motion.span className="first" initial={firstLoading ? {opacity:0, x: -50} : {}} animate={{opacity:1, x:0, transition: {delay: 1.7}}}>Votre corps est précieux.</motion.span>
                <motion.span className="second" initial={firstLoading ? {opacity:0, x: -50} : {}} animate={{opacity:1, x:0, transition: {delay: 2}}}>Il est votre véhicule pour l'éveil.</motion.span>
                <motion.span className="third" initial={firstLoading ? {opacity:0, x: -50} : {}} animate={{opacity:1, x:0, transition: {delay: 2.3}}}>Prenez en soin.</motion.span>
            </h2>
            <div className="institut" id="institut">
                <motion.div className="institut-img" initial={firstLoading ? {opacity:0, x: -50} : {}} animate={{opacity:1, x:0, transition: {delay: 2.6}}}>
                    <img src="./img/carousel-institut/manucure.jpg" alt="" className="slide1"/>
                    <img src="./img/carousel-institut/institut.png" alt="" className="slide2"/>
                    <img src="./img/carousel-institut/massage.jpg" alt="" className="slide3"/>
                </motion.div>
                <motion.p initial={firstLoading ? {opacity:0, x: 50} : {}} animate={{opacity:1, x:0, transition: {delay: 2.6}}}>Pauline vous acceuille dans son institut Idylle Beauté, situé à l’Aiguillon sur vie en Vendée. Voyagez au pays de la relaxation et du bien-être, dans une ambiance chaleureuse. Grâce à ses soins du visage, corps, onglerie, épilations etc.<br/>Venez tenter l’experience !</motion.p>
            </div>
            <div className="produit" id="produit">
                <div className="baija-img">
                    <img src="./img/carousel-baija/baija1.jpg" alt="produit baija" className="slide1"/>
                    <img src="./img/carousel-baija/baija2.jpg" alt="produit baija" className="slide2"/>
                    <img src="./img/carousel-baija/baija3.jpg" alt="produit baija" className="slide3"/>
                    <img src="./img/carousel-baija/baija4.jpg" alt="produit baija" className="slide4"/>
                </div>               
                <p>Envie de voyager ? Venez découvrir la marque BAÏJA-PARIS dans votre institut. Elle vous propose des univers olfactifs étonnants et exclusifs. Fabriqué en France avec ingrédients d’origine naturelle. Une marque positive, gaie, colorée, qui invite à la bonne humeur pour vous offrir une nouvelle idée de la beauté et du soin.</p>
            </div>
        </section>
    )
}
