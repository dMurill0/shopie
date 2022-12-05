import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaMoon } from "react-icons/fa"
import SearchIcon from '@mui/icons-material/Search';


export const Header = ({ handleSwitch}) => {


    return (
        <div className='bg-slate-200  dark:bg-slate-800  w-full z-30 '>
            <div className='flex justify-evenly md:justify-between border-b-2 p-4 items-center'>
                <div className='hidden sm:block'>
                    <NavLink to="/"><img className='h-16 mx-5 rounded-full' src='./images/logo3.png' alt='' /></NavLink>
                </div>

                <nav className='font-semibold font-oswald space-x-4 md:space-x-8 xl:space-x-10'>
                    <NavLink to="/Inicio" className='{({isActive}) => isActive ? "active" : "" } text-sm text-gray-800 [&.active]:text-blue-600 dark:[&.active]:text-red-400  dark:text-white md:text-lg xl:text-xl hover:text-slate-800 dark:hover:text-red-400 uppercase'>Inicio</NavLink>
                    <NavLink to='/Catalogo' className='{({isActive}) => isActive ? "active" : "" } text-sm text-gray-800 [&.active]:text-blue-600 dark:[&.active]:text-red-400 dark:text-white md:text-lg xl:text-xl dark:hover:text-red-400 uppercase'>Catálogo</NavLink>
                    <NavLink to='/Blog' className='{({isActive}) => isActive ? "active" : "" } text-sm text-gray-800 [&.active]:text-blue-600 dark:[&.active]:text-red-400 dark:text-white md:text-lg xl:text-xl dark:hover:text-red-400 uppercase '>Blog</NavLink>
                    <NavLink to='/About' className='{({isActive}) => isActive ? "active" : "" } text-sm text-gray-800 [&.active]:text-blue-600 dark:[&.active]:text-red-400 dark:text-white md:text-lg xl:text-xl dark:hover:text-red-400 uppercase'>Sobre Nosotros</NavLink>
                    <NavLink to='/Contact' className='{({isActive}) => isActive ? "active" : "" } text-sm text-gray-800 [&.active]:text-blue-600 dark:[&.active]:text-red-400 dark:text-white md:text-lg xl:text-xl dark:hover:text-red-400 uppercase'>Contacto</NavLink>
                </nav>
                <div className='flex items-center justify-between w-[10rem] '>
                    <FaMoon className='text-2xl text-orange-500 dark:text-blue-400 cursor-pointer mr-5' onClick={handleSwitch} />
                    <SearchIcon className='mr-5 text-gray-700 dark:text-slate-100 ' />
                    <NavLink href='/'><ShoppingCartIcon className=' text-red-400 m-2 rounded-full p-1' fontSize='large' /></NavLink>
                </div>
            </div>
        </div>
    )
}
