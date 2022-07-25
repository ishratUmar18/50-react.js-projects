import React from "react"
import katie from "../assets/katie.png"
import star from "../assets/star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={katie} alt="Katie Zaferes" />
            <div className="card--stats">
                <img src={star} alt="Star" className="card--star"/>
                <span className="gray">5.0</span>
                <span className="gray">(6) • </span>
                <span>USA</span>
            </div>
            <p>Life lessons by Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}