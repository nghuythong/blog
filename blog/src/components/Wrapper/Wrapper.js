import React from 'react'
import { Button } from '../Button/Button'
import "../../App.css"
import "./Wrapper.css"

export default function Wrapper() {
    return (
        <div className="wrapper-container">
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
            <h1>CHÀO MỪNG ĐẾN VỚI
            <br/>
            NÚI LANGBIANG</h1>
            <p>Thực Hiện Bởi Ố Là La Group</p>
            <div className="wrapper-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Bắt Đầu
                </Button>
            </div>
        </div>
    )
}
