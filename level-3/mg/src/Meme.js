import React, {useState} from 'react';
import EditForm from './EditForm';

export default function Meme(props) {
    const {randomImage, topText, bottomText, id, handleDeleteFromList, handleEditList, toggleEdit, changeToggleEdit, handleEditChange} = props

    const [memeObject, setMemeObject] = useState({
        topText: topText,
        bottomText: bottomText
    })

    const handleChange = (e) => { 
        const {name, value} = e.target
        setMemeObject(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log("handle submit was called and these are the updates: ", memeObject)
        handleEditList(id, memeObject)
    }

    return (
        <>
        
            <form className="meme-list" id={id} onSubmit={handleSubmit}>
                <img src={randomImage} className="meme-listImage" alt=""/>
                <h2 className="meme-listTextTop">{topText}</h2>
                <h2 className="meme-listTextBottom">{bottomText}</h2>
                <br />
                <button type="button" className="delete-list" onClick={() => handleDeleteFromList(id)}>Delete</button>
                <button type="button" className="edit-list" onClick={() => changeToggleEdit()}>Edit</button>
                <br />
                {toggleEdit &&
                    <>
                        <EditForm 
                        topText={memeObject.topText}
                        bottomText={memeObject.bottomText}
                        onChange={handleChange}
                        />
                        <button>Submit</button>
                    </>
                }
                </form>
        </>
    )
}