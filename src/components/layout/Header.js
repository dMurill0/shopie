import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Avatar } from '@mui/material';

export const Header = () => {
    return (
        <>
            <header>
                <nav className="logo-profile">
                    <div className='logo'>
                        <NavLink to="Inicio"><img src='./images/logo.png' alt='' /></NavLink>
                    </div>
                    <div className='srch_bar'>
                        <input type="search" placeholder="Buscar Producto" />
                        <input type="button" value="Buscar" />
                    </div>
                    <div className='profile'>
                        <Avatar alt="Daniel" src="./images/avatar.jpg" sx={{ width: 56, height: 56 }} />
                        <Badge badgeContent="0" color="primary" style={{ marginRight: "3px" }}>
                            <a href='/'><ShoppingCartIcon style={{ color: "black" }} /></a>
                        </Badge>
                    </div>
                </nav>
                <nav className='navBar'>
                    <NavLink to="Inicio" className='nav-link'>Inicio</NavLink>
                    <NavLink to='Catalogo' className='nav-link'>Catálogo</NavLink>
                    <NavLink to='Blog' className='nav-link'>Blog</NavLink>
                    <NavLink to='About' className='nav-link'>Sobre Nosotros</NavLink>
                    <NavLink to='Contact' className='nav-link'>Contacto</NavLink>
                </nav>
            </header>
        </>
    )
}
