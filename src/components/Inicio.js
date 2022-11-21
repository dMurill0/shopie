import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from './layout/Header';
import { motion } from "framer-motion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export const Inicio = () => {
    return (
        <div className=''>
            <Header />
            <div className="h-screen  flex flex-col my-12 ">
                <div className='w-full'>
                    <h1 className='text-center text-8xl font-extrabold my-10 tracking-wider capitalize text-secondary subpixel-antialiased' id="title">La casa de las <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-slate-800 underline underline-offset-3 decoration-8 decoration-gray-600'>Sneakers</span> </h1>
                </div>
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
                    <div className='w-1/4 space-y-10 bg-meshBg p-4 m-2 rounded-2xl opacity-90 flex flex-col'>
                        <p className='text-2xl font-semibold font-Oswald text-gray-800'>Avanzando en tu ritual diario, con cada paso acercandote a tus objetivos personales. No importa si entrenas, simplemente mantén su estilo</p>
                        <NavLink to="/blog" className="text-2xl text-black font-bold hover:text-secondary/80">Leer más <ArrowForwardIcon /></NavLink>
                    </div>
                    {/* <div className='h-full w-auto mx-20'>
                        <img className='h-48 border-8 border-red-400 rounded-full' src="./images/image1.jpg" alt="" />
                        <img className='h-48 border-8 border-red-400  rounded-full' src="./images/image2.jpg" alt="" />
                    </div> */}
                    <div className='w-1/4 space-y-5 bg-meshBg p-4 m-2 rounded-2xl opacity-90 flex flex-col justify-around'>
                        <h2 className='text-gray text-5xl font-bold uppercase tracking-widest'>Ahorra hasta un 60% </h2>
                        <p>Usa el código sale20 para obtener un descuento extra de un 20% en artículos seleccionados</p>
                        <button className='bg-secondary/70 hover:bg-secondary p-3 mt-3 rounded-lg sm:mt-0 text-xl text-gray-800 hover:text-gray-200 font-semibold'>Compra ya</button>
                    </div>
                </motion.div>
                <motion.div initial={{
                    x: 500,
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
                    className='w-screen mt-20 flex items-center justify-around bg-red-400 '>
                    <h2 className='font-semibold text-2xl items-center'>Nuestras marcas</h2>
                    <img className='h-12 m-2' src="./images/brand1.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand2.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand3.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand4.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand5.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand6.png" alt="" />
                </motion.div>
            </div>
        </div>
    )
}
