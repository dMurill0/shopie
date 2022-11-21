import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';

export const Header = () => {
    return (
        <div className='bg-slate-800'>
            <div className='flex justify-between border-b-2 p-4 items-center'>
                <div className=''>
                    <NavLink to="/"><img className='h-14 mx-5 rounded-full' src='./images/logo3.png' alt='' /></NavLink>
                </div>
                <nav className='font-semibold font-mono'>
                    <NavLink to="Inicio" className='mr-2 md:mr-8 xl:mr-10 text-sm text-white md:text-lg xl:text-xl hover:text-secondary uppercase'>Inicio</NavLink>
                    <NavLink to='Catalogo' className='mr-2 md:mr-8 xl:mr-10 text-sm text-white md:text-lg xl:text-xl hover:text-secondary uppercase'>Catálogo</NavLink>
                    <NavLink to='Blog' className='mr-2 md:mr-8 xl:mr-10 text-sm text-white md:text-lg xl:text-xl hover:text-secondary uppercase'>Blog</NavLink>
                    <NavLink to='About' className='mr-2 md:mr-8 xl:mr-10 text-sm text-white md:text-lg xl:text-xl hover:text-secondary uppercase'>Sobre Nosotros</NavLink>
                    <NavLink to='Contact' className='mr-2 md:mr-8 xl:mr-10 text-sm text-white md:text-lg xl:text-xl hover:text-secondary uppercase'>Contacto</NavLink>
                </nav>
                <div className='flex items-center mx-4'>
                    <SearchIcon className='mr-5 text-slate-100 ' />
                    <Badge badgeContent="0" color="primary" >
                        <NavLink href='/'><ShoppingCartIcon className=' text-secondary m-2 rounded-full p-1' fontSize='large' /></NavLink>
                    </Badge>
                </div>
            </div>
        </div>
    )
}
