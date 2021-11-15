import React, { useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FirstLoadingContext } from '../context/FirstLoading';
import { useInView } from 'react-intersection-observer';

export default function Presentation() {

    const { firstLoading } = useContext(FirstLoadingContext);
    const animationControl = useAnimation();
    const { inView } = useInView();

    if(inView){
        animationControl.start({
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.3
            }
        })
    }

    return (
        <section className="description">
            <h2>
                <span className="first">La beauté et le soin</span>
                <span className="second">à portée de main.</span>
            </h2>
            <div className="institut" id="institut">
                <div className="institut-img">
                    <img src="./img/carousel-institut/manucure.jpg" alt="manucure" className="slide1"/>
                    <img src="./img/carousel-institut/institut.png" alt="institut" className="slide2"/>
                    <img src="./img/carousel-institut/massage.jpg" alt="massage" className="slide3"/>
                </div>
                <p initial={firstLoading ? {opacity:0, x: 50} : {}} animate={{opacity:1, x:0, transition: {delay: 1.5}}}>Pauline vous acceuille dans son institut Idylle Beauté, situé à l’Aiguillon sur vie en Vendée. Voyagez au pays de la relaxation et du bien-être, dans une ambiance chaleureuse. Grâce à ses soins du visage, corps, onglerie, épilations etc.<br/>Venez tenter l’experience !</p>
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
