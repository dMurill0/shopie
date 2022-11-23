import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../Inicio"
import { Contact } from "../Contact";
import { About } from '../About';
import { Catalogo } from '../Catalogo';
import { Blog } from '../Blog';
export const MyRoutes = () => {
    return (
        <BrowserRouter>


            {/*     CONTENIDO CENTRAL   */}
            <section className="content">
                <Routes>
                    <Route path='/' exact element={<Navigate to="Inicio" />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/catalogo' element={<Catalogo />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={
                        <Navigate to="Inicio" />
                    } />

                </Routes>

            </section>


        </BrowserRouter>
    )
}
