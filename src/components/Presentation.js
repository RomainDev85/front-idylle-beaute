import React from 'react'

export default function Presentation() {
    return (
        <section className="description">
            <h2>
                <span className="first">Votre corps est précieux.</span>
                <span className="second">Il est votre véhicule pour l'éveil.</span>
                <span className="third">Prenez en soin.</span>
            </h2>
            <div className="institut" id="institut">
                <div className="institut-img">
                    <img src="./img/carousel-institut/manucure.jpg" alt="" className="slide1"/>
                    <img src="./img/carousel-institut/institut.png" alt="" className="slide2"/>
                    <img src="./img/carousel-institut/massage.jpg" alt="" className="slide3"/>
                </div>
                <p>Pauline vous acceuille dans son institut Idylle Beauté, situé à l’Aiguillon sur vie en Vendée. Voyagez au pays de la relaxation et du bien-être, dans une ambiance chaleureuse. Grâce à ses soins du visage, corps, onglerie, épilations etc.<br/>Venez tenter l’experience !</p>
            </div>
            <div className="produit">
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
