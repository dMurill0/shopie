import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from './layout/Header';
import { motion } from "framer-motion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Footer } from './layout/Footer';
export const Inicio = () => {
    return (
        <div className='h-fit w-screen bg-gray-700'>
            <Header />
            <div className="h-full flex flex-col my-0 md:my-6 lg:my-12 justify-between bg-heroBg grayscale-5 opacity-90 bg-repeat-y bg-cover">
                <div className='w-full'>
                    <h1 className='p-4 flex items-center justify-center text-center text-gray-800 text-4xl sm:text-6xl md:text-8xl font-oswald font-extrabold bg-red-400' id="title">La casa de las Sneakers </h1>
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
                    <div className='w-1/3  space-y-10 bg-meshBg p-4 m-2 rounded-2xl opacity-90 flex flex-col shadow-md shadow-gray-700'>
                        <p className='text-large lg:text-2xl font-semibold font-oswald text-gray-800'>Avanzando en tu ritual diario, con cada paso acercandote a tus objetivos personales. No importa si entrenas, simplemente mantén su estilo</p>
                        <NavLink to="/blog" className="hidden sm:block text-2xl text-black font-bold font-oswald hover:text-secondary/80">Leer más <ArrowForwardIcon /></NavLink>
                        <NavLink to="/blog" className="block sm:hidden text-2xl text-black font-bold font-oswald hover:text-secondary/80">Ínspirate</NavLink>
                    </div>
                    {/* <div className='h-full w-auto mx-20'>
                        <img className='h-48 border-8 border-red-400 rounded-full' src="./images/image1.jpg" alt="" />
                        <img className='h-48 border-8 border-red-400  rounded-full' src="./images/image2.jpg" alt="" />
                    </div> */}
                    <div className='w-1/3 space-y-5 bg-meshBg p-4 m-2 rounded-2xl opacity-90 flex flex-col justify-around shadow-md shadow-gray-700'>
                        <h2 className='font-oswald text-gray text-xl md:text-3xl lg:text-5xl font-bold uppercase tracking-widest'>Ahorra hasta un 60% </h2>
                        <p className='font-oswald'>Usa el código SALE20 para obtener un descuento extra de un 20% en artículos seleccionados</p>
                        <button className='bg-secondary/70 hover:bg-secondary p-3 mt-3 rounded-lg sm:mt-0 text-xl text-gray-800 hover:text-gray-200 font-normal font-oswald'>Compra ya</button>
                    </div>
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
                    <h2 className=' font-oswald font-semibold text-2xl items-center'>Nuestras marcas</h2>
                    <img className='h-12 m-2' src="./images/brand1.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand2.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand3.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand4.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand5.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand6.png" alt="" />
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}
