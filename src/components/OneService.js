import React from 'react'

export default function OneService({ title, price }) {
    return (
        <li>
            <h3>{ title }</h3>
            <p>{ price } €</p>
        </li>
    )
}
