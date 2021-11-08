import React from 'react'

export default function OneService({ title, price, description, time }) {
    return (
        <li>
            <div className="left">
                <h3>{ title }</h3>
                {description && <p>{ description }</p>}
            </div>
            <div className="right">
                <h3>{  price % 1 !== 0 ? price.toFixed(2) : price } €</h3>
                {time && <p>{ time }</p>}
            </div>
        </li>
    )
}
