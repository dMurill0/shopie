import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';

export const Header = () => {
    return (
        <div className=''>
            <div className='flex justify-between border-b p-4 items-center'>
                <div className=''>
                    <NavLink to="/"><img className='h-12 rounded-full' src='./images/logo.png' alt='' /></NavLink>
                </div>
                <nav className='font-semibold font-mono '>
                    <NavLink to="Inicio" className='mr-5 hover:text-secondary'>Inicio</NavLink>
                    <NavLink to='Catalogo' className='mr-5 hover:text-secondary'>Catálogo</NavLink>
                    <NavLink to='Blog' className='mr-5 hover:text-secondary]'>Blog</NavLink>
                    <NavLink to='About' className='mr-5 hover:text-secondary'>Sobre Nosotros</NavLink>
                    <NavLink to='Contact' className='mr-5 hover:text-secondary'>Contacto</NavLink>
                </nav>
                <div className='flex items-center mx-4'>
                    <SearchIcon className='mr-5' />
                    <Badge badgeContent="0" color="secondary" >
                        <a href='/'><ShoppingCartIcon className='bg-secondary text-white m-2 rounded-full p-1' fontSize='large' /></a>
                    </Badge>
                </div>
            </div>
        </div>
    )
}
