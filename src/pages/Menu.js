import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Menu() {
    return (
        <section className="menu-navigation">
            <ul>
                <li><HashLink smooth to="/#institut"><i class="far fa-star"></i>Institut</HashLink></li>
                <li><HashLink smooth to="/#produit"><i class="far fa-star"></i>Nos produits</HashLink></li>
                <li><HashLink smooth to="/#services"><i class="far fa-star"></i>Nos prestations</HashLink></li>
                <li><HashLink smooth to="/#contact"><i class="far fa-star"></i>Contact</HashLink></li>
            </ul>
        </section>
    )
}
