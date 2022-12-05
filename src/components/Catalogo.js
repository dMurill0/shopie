import React from 'react'
import { sneakers } from './data/sneakers'
import { motion } from "framer-motion";

export const Catalogo = () => {


    return (
        <div className='h-fit  w-screen  bg-slate-900'>

           <h1 className='p-4 flex items-center justify-center text-center text-gray-200 dark:text-gray-800 text-4xl sm:text-6xl md:text-8xl font-oswald font-extrabold bg-blue-400 dark:bg-red-400 uppercase mt-8'>Catálogo</h1>
            <div className='w-full h-fit bg-slate-400 flex justify-around flex-wrap max-w-screen'>

                {

                    sneakers.slice(0, sneakers.length).map(sneaker => {
                        return (
                            <motion.div
                                initial={{
                                    x: -500,
                                    y: 500,
                                    opacity: 0,
                                    scale: 0.15,
                                }}
                                animate={{
                                    x: 0,
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 1.5,
                                }}
                                key={sneaker.id} className='bg-red-400 w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/8 h-fit m-10 p-4 flex flex-col space-y-2 shadow-xl '>

                                <img className='w-70 rounded-2xl hover:scale-125 duration-700 hover:shadow-2xl' src={sneaker.imagen} alt="" />
                                <h1 className='text-white font-oswald'>{sneaker.nombre}</h1>
                                <div className='flex justify-between'>
                                    <h2 className='font-oswald'>{sneaker.color}</h2>
                                    <h3 className='bg-slate-200 rounded-2xl p-2 font-oswald'>{sneaker.precio} €</h3>
                                </div>

                            </motion.div>
                        );
                    })
                }
            </div>

        </div>
    )
}
export default Catalogo