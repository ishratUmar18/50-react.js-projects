import React from 'react';
import Heroimage from '../assets//hero-image.png'

export default function HeroSection() {
    return (
        <section className="hero">
            <img src={Heroimage} alt="Hero" className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind
             hosts—all without leaving home.</p>
        </section>
    )
}