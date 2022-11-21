import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';


export const Header = () => {
    return (
        <div className='bg-slate-800'>
            <div className='flex justify-between border-b-2 p-4 items-center'>
                <div className='hidden sm:block'>
                    <NavLink to="/"><img className='h-16 mx-5 rounded-full' src='./images/logo3.png' alt='' /></NavLink>
                </div>
                <nav className='font-semibold font-oswald'>
                    <NavLink to="Inicio" className='mr-2 md:mr-8 xl:mr-10 text-sm text-white md:text-lg xl:text-xl hover:text-red-400 uppercase'>Inicio</NavLink>
                    <NavLink to='Catalogo' className='mr-2 md:mr-8 xl:mr-10 text-sm text-white md:text-lg xl:text-xl hover:text-red-400 uppercase'>Catálogo</NavLink>
                    <NavLink to='Blog' className='mr-2 md:mr-8 xl:mr-10 text-sm text-white md:text-lg xl:text-xl hover:text-red-400 uppercase'>Blog</NavLink>
                    <NavLink to='About' className='mr-2 md:mr-8 xl:mr-10 text-sm text-white md:text-lg xl:text-xl hover:text-red-400 uppercase'>Sobre Nosotros</NavLink>
                    <NavLink to='Contact' className='mr-2 md:mr-8 xl:mr-10 text-sm text-white md:text-lg xl:text-xl hover:text-red-400 uppercase'>Contacto</NavLink>
                </nav>
                <div className='flex items-center mx-4'>
                    <SearchIcon className='mr-5 text-slate-100 ' />
                    <NavLink href='/'><ShoppingCartIcon className=' text-red-400 m-2 rounded-full p-1' fontSize='large' /></NavLink>
                </div>
            </div>
        </div>
    )
}
