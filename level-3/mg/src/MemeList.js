import React from 'react';
import EditForm from './EditForm';

export default function MemeList(props) {
    const {randomImage, topText, bottomText, id, handleDeleteFromList, handleEditList, toggleEdit, handleEditChange} = props

    return (
            <form className="meme-list" id={id} >
                <img src={randomImage} className="meme-listImage" alt=""/>
                <h2 className="meme-listTextTop">{topText}</h2>
                <h2 className="meme-listTextBottom">{bottomText}</h2>
                <br />
                <button type="button" className="delete-list" onClick={() => handleDeleteFromList(id)}>Delete</button>
                <button type="button" className="edit-list" onClick={() => handleEditList(id)}>Edit</button>
                <br />
                {toggleEdit &&
                <EditForm 
                    topText={topText}
                    bottomText={bottomText}
                    onChange={handleEditChange}
                />}
            </form>
    )
}