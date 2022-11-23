import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from './layout/Header';
import { motion } from "framer-motion"
import { Cursor } from "react-simple-typewriter"

export const Inicio = () => {
    return (
        <div className='h-fit min-h-fit w-screen bg-slate-900 '>
            <Header />
            <div className="h-full flex flex-col py-10 space-y-40 md:my-6 lg:my-12 justify-between bg-heroBg grayscale-5 opacity-90 bg-no-repeat bg-cover  ">
                <div className='w-full'>
                    <h1 className='p-4 flex items-center justify-center text-center text-gray-800 text-4xl sm:text-6xl md:text-8xl font-oswald font-extrabold bg-red-400 ' id="title">El hogar de las Sneakers </h1>
                </div>
                <Cursor cursorColor='#e16769' />

                <motion.div initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 2.5,
                    }}
                    className="flex justify-between mx-10 my-10 ">
                    <div className='sm:w-2/5 md:w-1/3  space-y-10 bg-meshBg p-4 m-2 rounded-2xl flex flex-col shadow-md shadow-gray-700'>
                        <p className='text-large lg:text-2xl font-semibold font-oswald text-gray-800'>Avanzando en tu ritual diario, con cada paso acercandote a tus objetivos personales. No importa si entrenas, simplemente mantén su estilo</p>
                        <NavLink to="/blog" className="hidden sm:block text-2xl text-black font-bold font-oswald hover:text-secondary/80">Leer más &rarr; </NavLink>
                        <NavLink to="/blog" className="block sm:hidden text-2xl text-black font-bold font-oswald hover:text-secondary/80">Ínspirate</NavLink>
                    </div>
                    <div className='sm:w-2/5 md:w-1/3 space-y-5 bg-meshBg p-4 m-2 rounded-2xl flex flex-col justify-around shadow-md shadow-gray-700'>
                        <h2 className='font-oswald text-gray text-xl md:text-3xl lg:text-5xl font-bold uppercase tracking-widest'>Ahorra hasta un 60% </h2>
                        <p className='font-oswald'>Usa el código SALE20 para obtener un descuento extra de un 20% en artículos seleccionados</p>
                        <NavLink to="/Catalogo"><button className='bg-secondary/70 w-1/2  hover:bg-secondary p-3 mt-3 rounded-lg sm:mt-0 text-xl text-gray-800 hover:text-gray-200 font-normal font-oswald'>Compra ya</button></NavLink>
                    </div>
                </motion.div>
                <motion.div initial={{
                    x: -5000,
                    opacity: 0,
                    scale: 0.5,
                }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 2.5,
                    }}

                    className='h-60  bg-red-400 flex items-center justify-around '>
                    <NavLink to="/Catalogo"><h3 className='text-large md:text-2xl lg:text-4xl font-semibold lg:font-bold font-oswald hidden md:block ml-10 uppercase'>Trending &rarr;</h3></NavLink>
                    <img className='w-20 rotate-3 sm:w-24 md:w-34 xl:w-44 rounded-lg hover:scale-150 duration-300 hover:shadow-2xl' src="/images/productos/sneaker1.webp" alt="" />
                    <img className='w-20 rotate-3 sm:w-24 md:w-34 xl:w-44 rounded-lg hover:scale-150 duration-300 hover:shadow-2xl' src="../images/productos/sneaker2.webp" alt="" />
                    <img className='w-20 rotate-3 sm:w-24 md:w-34 xl:w-44 rounded-lg hover:scale-150 duration-300 hover:shadow-2xl' src="../images/productos/sneaker3.webp" alt="" />
                    <img className='w-20 rotate-3 sm:w-24 md:w-34 xl:w-44 rounded-lg hover:scale-150 duration-300 hover:shadow-2xl' src="../images/productos/sneaker8.webp" alt="" />
                </motion.div>
                <motion.div initial={{
                    z: -500,
                    opacity: 0,
                    scale: 2,
                }}
                    animate={{
                        z: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 2.5,
                    }}
                    className='w-screen flex items-center justify-around bg-red-400 '>
                    <h2 className='hidden sm:block font-oswald font-semibold text-lg md:text-2xl items-center'>Nuestras marcas</h2>
                    <img className='h-6 sm:h-10 md:h-12 m-2' src="./images/brand1.png" alt="" />
                    <img className='h-6 sm:h-10 md:h-12 m-2' src="./images/brand2.png" alt="" />
                    <img className='h-6 sm:h-10 md:h-12 m-2' src="./images/brand3.png" alt="" />
                    <img className='h-6 sm:h-10 md:h-12 m-2' src="./images/brand4.png" alt="" />
                    <img className='h-6 sm:h-10 md:h-12 m-2' src="./images/brand5.png" alt="" />
                    <img className='h-6 sm:h-10 md:h-12 m-2' src="./images/brand6.png" alt="" />
                </motion.div>
            </div>

        </div>
    )
}
