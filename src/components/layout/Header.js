import React from 'react'

export const Header = () => {
    return (
        <>
            <header>
                <nav className="logo-profile">
                    <div className='logo'>
                        <img src='' alt='' />
                    </div>
                    <div className='srch_bar'>
                        <input type="search" placeholder="Buscar Producto" />
                        <input type="button" value="Buscar" />
                    </div>
                    <div className='profile'>
                        <img src='images/cart.png' />
                        <img src='/shopie/public/images/logo.jpg' />
                    </div>
                </nav>
                <nav className='navBar'>
                    <a href='' className='nav-link'>Inicio</a>
                    <a href='' className='nav-link'>Catálogo</a>
                    <a href='' className='nav-link'>Blog</a>
                    <a href='' className='nav-link'>Sobre Nosotros</a>
                    <a href='' className='nav-link'>Contacto</a>
                </nav>
            </header>
        </>
    )
}
