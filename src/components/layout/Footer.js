import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer className=" flex p-5 bg-slate-800 justify-between items-center border-t-2">
            <div className="flex space-x-6 ml-4">
                <h3 className='hidden md:block text-xl font-semibold text-gray-300'>Síguenos en: </h3>
                <div className='space-x-5'>
                    <FontAwesomeIcon icon={faFacebook} size="2x" color='gray' className='hover:text-white hover:cursor-pointer' />
                    <FontAwesomeIcon icon={faTwitter} size="2x" color='gray' className='hover:text-white hover:cursor-pointer' />
                    <FontAwesomeIcon icon={faInstagram} size="2x" color='gray' className='hover:text-white hover:cursor-pointer' />
                </div>
            </div>
            <h3 className='text-lg md:text-xl font-semibold text-gray-300 uppercase'>Shopie &copy; 2022.</h3>
        </footer>
    )
}
