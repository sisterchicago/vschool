import React, {useContext} from 'react';
import {ThemeContext} from "./themeContext"

function Navbar(props) {

    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}-theme navbar`}>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
        </div>
    );
}
 
export default Navbar;