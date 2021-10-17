import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <section className="menu-navigation">
            <ul>
                <li><Link><i class="far fa-star"></i>Institut</Link></li>
                <li><Link><i class="far fa-star"></i>Nos produits</Link></li>
                <li><Link><i class="far fa-star"></i>Nos prestations</Link></li>
                <li><Link><i class="far fa-star"></i>Contact</Link></li>
            </ul>
        </section>
    )
}
