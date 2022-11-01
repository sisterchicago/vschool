import React from "react"
import Button from './Button';
import Header from './Header';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {ThemeContextProvider} from "./themeContext"

function App(props) {

    return (
        <>
            <ThemeContextProvider>
                <Navbar/>
                <Header/>
                <Button/>
                <Footer/>
            </ThemeContextProvider>
        </>
    );
}

export default App;
