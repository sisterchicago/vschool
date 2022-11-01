import React, {useContext} from 'react';
import {ThemeContext} from "./themeContext"

function Header(props) {
    
    const {color} = useContext(ThemeContext)
    
    return (
        <div className={`${color}-theme`}>
            <h2>Theme Context</h2>
            <h3>You are currently using {color} mode</h3>
        </div>
    );
}

export default Header;