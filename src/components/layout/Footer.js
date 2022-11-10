import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="socials">
                <h3>Síguenos en: </h3>
                <div>
                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ margin: "5px" }} />
                    <FontAwesomeIcon icon={faTwitter} size="2x" style={{ margin: "5px" }} />
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: "5px" }} />
                </div>
            </div>
            <h3 className='copyright'>Shopie Daniel Murillo &copy; 2022.</h3>
        </footer>
    )
}
