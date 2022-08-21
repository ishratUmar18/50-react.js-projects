import React from "react";
import memeData from "../memeData";

export default function Meme() {
    let url
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
        <div className="meme">
            <main>
            <p>{url}</p>
            <div className="form">
            <input type="text" placeholder="Enter your top text" className="form--input" />
            <input type="text" placeholder="Enter your bottom text" className="form--input" />
            <button className="form--button" onClick={getRandomMeme}>Get a new meme image 🖼</button>
            </div>
            </main>

        </div>
    )
}