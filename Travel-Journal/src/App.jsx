import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Cards"
import data from "./data"

export default function App() {
    const cards = data.map((item) =>
            <Card
                key={item.id}
                {...item}
            />
        );
return (
<div>
    <Navbar />
    <div className="cards-list">
                {cards}
            </div> 
</div>
)
}