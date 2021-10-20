import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirstLoadingContext  } from '../context/FirstLoading';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


export default function CardService({title, image, urlCategory, placeImage}) {

    const { firstLoading } = useContext(FirstLoadingContext);
    const animationImage = useAnimation();
    const animationText = useAnimation();
    const { inView, ref } = useInView();

    if(inView){
        animationImage.start({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 0.2
            }
        })
        animationText.start({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.3
            }
        })
    }

    return (
        <div className={`carte-service ${placeImage}`} ref={ref}>
            <motion.img src={"./img/carte-categorie/" + image} alt="categorie" initial={firstLoading ? {y: 40, opacity: 0} : {}} animate={firstLoading ? animationImage : {}}/>
            <motion.div className="content" initial={firstLoading ? {y: 40, opacity: 0} : {}} animate={firstLoading ? animationText : {}}>            
                <h3>{title}</h3>
                <span></span>
                <Link to={"/" + urlCategory } >Plus d'infos</Link>
            </motion.div>
        </div>
    )
}
