import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../Inicio"
import { Contact } from "../Contact";
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { About } from '../About';
import { Catalogo } from '../Catalogo';
import { Blog } from '../Blog';
export const MyRoutes = () => {
    return (
        <BrowserRouter>
            {/*     HEADER Y NAVEGACIÓN   */}
            <Header></Header>

            {/*     CONTENIDO CENTRAL   */}
            <section className="content">
                <Routes>
                    <Route path='/' element={<Navigate to="Inicio" />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/catalogo' element={<Catalogo />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                            <p>Página no encontrada</p>
                        </div>
                    } />

                </Routes>

            </section>

            {/*     FOOTER   */}
            {<Footer></Footer>}
        </BrowserRouter>
    )
}
