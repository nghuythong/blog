import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem text="Explore the hidden water" label="Adventure" path="/blogs"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Card
