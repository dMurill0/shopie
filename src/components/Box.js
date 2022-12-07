import React from 'react'
import { motion } from "framer-motion";
const Box = ({ id, title, price, color, image, description }) => {
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
            key={id} className='bg-red-400 w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/8 h-fit m-10 p-4 flex flex-col space-y-2 shadow-xl '>

            <img className='w-70 rounded-2xl hover:scale-125 duration-700 hover:shadow-2xl' src={image} alt="" />
            <h1 className='text-white font-oswald'>{title}</h1>
            <div className='flex justify-between'>
                <h2 className='font-oswald'>{color}</h2>
                <h3 className='bg-slate-200 rounded-2xl p-2 font-oswald'>{price} €</h3>
            </div>

        </motion.div>
    )
}

export default Box