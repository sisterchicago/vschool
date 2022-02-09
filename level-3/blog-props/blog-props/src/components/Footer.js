import React from 'react'
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div id="footer">
            <div id="icons">
					<div>
						<a href="https://startbootstrap.github.io/startbootstrap-clean-blog/#!"><FaTwitter/></a>
					</div>
					<div><a href="https://startbootstrap.github.io/startbootstrap-clean-blog/#!"><FaFacebook /></a></div>
					<div><a href="https://startbootstrap.github.io/startbootstrap-clean-blog/#!"><FaGithub /></a></div>
			</div>
            <p>Copyright © Your Website 2021</p>
        </div>
    )
}

export default Footer