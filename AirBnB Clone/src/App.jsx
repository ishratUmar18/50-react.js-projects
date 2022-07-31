import React from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/Hero-section"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })    

return (
<div>
    <Navbar />
    <HeroSection />
    <section className="cards-list">
      {cards}
    </section>
</div>
)}
