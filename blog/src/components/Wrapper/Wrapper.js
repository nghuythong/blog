import React from 'react'
import { Button } from '../Button/Button'
import "../../App.css"
import "./Wrapper.css"

export default function Wrapper() {
    return (
        <div className="wrapper-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="wrapper-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}
