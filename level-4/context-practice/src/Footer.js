import React, {useContext} from 'react'
import {ThemeContext} from "./themeContext"

function Footer(props) {

    const {color} = useContext(ThemeContext)
    
    return (
        <div className={`${color}-theme`}>
            <h5>Nailed it!</h5>
        </div>
    )
}

export default Footer