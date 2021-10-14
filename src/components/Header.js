import React from 'react';

export default function Header() {

    return (
        <section className="header">
            <div className="header-content">
                <h2>
                    <span className="first">La beauté et le soin</span>
                    <span className="second"> à portée de main.</span>
                </h2>
                <div className="header-btn">
                    <a href="#service">Prestations</a>
                    <a href="/">Contactez moi</a>
                </div>
            </div>
            <div className="header-img">
                <div className="img" style={{backgroundImage: "url('./img/header-img.jpg')"}}></div>
            </div>
        </section>
    )
}
