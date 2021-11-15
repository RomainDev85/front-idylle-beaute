import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Contact() {

    const [loadInfo, setloadInfo] = useState(true)
    const [infoSociety, setinfoSociety] = useState(null)

    useEffect(() => {
        if(loadInfo){
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/society`)
            .then(res => {
                setinfoSociety(res.data)
                setloadInfo(false)
            })
        }
    }, [loadInfo, infoSociety])
    // console.log(infoSociety);



    // Add space between number of phone
    const phoneNumber = (telephone) => {
        telephone = infoSociety.telephone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
        return telephone
    }

    if(loadInfo === false){
        return (
            <section className="contact" style={{backgroundImage: "url('./img/background-contact.jpg')"}} id="contact" >
                <div className="contact-card">
                <h3 className="titre">Contact</h3>
                <ul className="join">
                    <li><i className="fas fa-phone"></i><a href={"tel:" + infoSociety.telephone} style={{cursor: 'initial'}} >{phoneNumber(infoSociety.telephone)}</a></li>
                    <li><a href={infoSociety.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i> Facebook</a></li>
                    <li><a href={infoSociety.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
                    <li><i className="fas fa-envelope"></i> {infoSociety.email}</li>
                </ul>
                <iframe title="test" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.6864992316346!2d-1.8314550835975292!3d46.67245027913387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48045092778b5281%3A0xc7c050a38c59febc!2s21%20Rue%20Georges%20Clemenceau%2C%2085220%20L&#39;Aiguillon-sur-Vie!5e0!3m2!1sfr!2sfr!4v1620816008034!5m2!1sfr!2sfr" loading="lazy"></iframe>
                <p className="position"><i className="fas fa-map-marker-alt"></i> {infoSociety.adresse}, {infoSociety.code_postal}, {infoSociety.ville}</p>
                <h3>Horaire</h3>
                <ul className="horaire">
                    <li>Lundi : {infoSociety.horaire_lundi}</li>
                    <li>Mardi : {infoSociety.horaire_mardi}</li>
                    <li>Mercredi : {infoSociety.horaire_mercredi}</li>
                    <li>Jeudi : {infoSociety.horaire_jeudi}</li>
                    <li>Vendredi : {infoSociety.horaire_vendredi}</li>
                    <li>Samedi : {infoSociety.horaire_samedi}</li>
                    <li>Dimanche : {infoSociety.horaire_dimanche}</li>
                </ul>
                </div>
            </section>
        )
    }
    return (
        <section className="services" id="services">
            <span className="loader" style={{margin: "20px"}}></span>
        </section>
    )
}
