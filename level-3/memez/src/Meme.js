import React, {useState, useEffect} from 'react'
import MemeListItem from "./MemeListItem"

export default function Meme() {

    const defaultMeme = {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }

    const [meme, setMeme] = useState(defaultMeme)

    const [allMemes, setAllMemes] = useState([])

    const [memesList, setMemesList] = useState([])

    const memesListElements = memesList.map((meme, index) => {
        return <MemeListItem key = {index} {...meme} />
    })

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function handleSave() {
        setMemesList(prevMemesList => {
            return [...prevMemesList,
            {
                topText: meme.topText,
                bottomText: meme.bottomText,
                randomImage: meme.randomImage
            }]
        })
        setMeme(defaultMeme)
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    value={meme.topText} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <br/>
            <button 
                className="save--btn"
                onClick={handleSave}
            >
                Save Meme
            </button>
            <div className="saved--memes">
                <h2 className="saved--header">Saved Memes</h2>
                <ul>
                    {memesListElements}
                </ul>
            </div>
        </main>
    )
}