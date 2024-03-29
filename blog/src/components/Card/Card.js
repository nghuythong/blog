import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
    return (
        <div className="cards">
            <h1>Khám Phá Địa Điểm Đặc Sắc!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem text="Núi Langbiang Đà Lạt – kinh nghiệm hữu ích nhất khi muốn chinh phục ngon núi này" label="Khám Phá" path="/blogs"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Card
