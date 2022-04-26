import React from 'react'

function Navbar() {
    return (
        <div id="navbar">
            <a id="navbarTitle" href='https://startbootstrap.github.io/startbootstrap-clean-blog/'>Start Bootstrap</a>
            <div id="navbarLinks">
                <a className="navbarLink" href='https://startbootstrap.github.io/startbootstrap-clean-blog/'>HOME</a>
                <a className="navbarLink" href='https://startbootstrap.github.io/startbootstrap-clean-blog/'>ABOUT</a>
                <a className="navbarLink" href='https://startbootstrap.github.io/startbootstrap-clean-blog/'>SAMPLE POST</a>
                <a className="navbarLink" href='https://startbootstrap.github.io/startbootstrap-clean-blog/'>CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar 