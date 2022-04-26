import React, {useState, useEffect} from 'react'
import MemeList from './MemeList'
import axios from 'axios'

export default function Form() {
    const [meme, setMeme] = React.useState({
        id: '61579',
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        edit: false
    })
    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => setAllMemeImages(res.data.data.memes))
            .catch(err => console.error(err))
    }, [meme])
    const [allMemeImages, setAllMemeImages] = useState()
    const handleChange = (e) => {
        const {name, value} = e.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    const [memeList, setMemeList] = useState([])
    const [toggleEdit, setToggleEdit] = useState(false)
    const handleAddToList = (e) => {
        e.preventDefault()
        setMemeList(prevList => ([...prevList, meme]))
        setMeme(
            {
                id: '61579',
                topText: "",
                bottomText: "",
                randomImage: "http://i.imgflip.com/1bij.jpg",
                edit: false
            }
        )
    }
    const handleDeleteFromList = (id) => {
        setMemeList(memeList.filter(meme => meme.id !== id))
    }
    const handleEditList = (id) => {
        setToggleEdit(prevToggle => !prevToggle)
        const result = memeList.find(meme => meme.id === id)
    }

    const handleEditChange = (e) => {
        const {name, value, parentElement} = e.target
        const {id} = parentElement
        setMemeList(prevState => {
            const specificMeme = prevState.find(meme => meme.id === id)
            specificMeme[name] = value
            return prevState.map(meme => {
                if (meme.id === specificMeme.id) {
                    return specificMeme
                } else return meme
            })
        })
    }

    const listOfMemes = memeList.map(meme => (
        <MemeList 
            key={meme.id}
            {...meme}
            handleDeleteFromList={handleDeleteFromList}
            handleEditList={handleEditList}
            toggleEdit={toggleEdit}
            handleEditChange={handleEditChange}
        />
    ))
    const styles = {
        border: "5px solid black"
    }
    const getMemeImage = (e) => {
        e.preventDefault()
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        const id = allMemeImages[randomNumber].id
        setMeme(prevMeme => ({...prevMeme, randomImage: url, id: id}))
    }
    return (
        <div className="form" >
            <form onSubmit={handleAddToList}>
                <input 
                    name="topText"
                    type="text" 
                    className="text-box" 
                    placeholder='Top Text'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    name="bottomText"
                    type="text" 
                    className="text-box" 
                    placeholder='Bottom Text'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <br />
                <input 
                    onClick={getMemeImage} 
                    type="submit" 
                    className="generate" 
                    value="Get a new meme image 🖼"
                />
                <div className="meme-container">
                    <img src={meme.randomImage} className="meme-Image" alt=""/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
                <button className="generate">Generate Meme</button>
            </form>
            {listOfMemes.length > 0 && <div style={styles} className="memelist-container">
                {listOfMemes}
            </div>}
        </div>
    )
}