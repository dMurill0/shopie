import React from 'react'
import { Button } from '@mui/material';
import { Header } from './layout/Header';
export const Inicio = () => {
    return (
        <>
            <Header />
            <div className='h-screen  flex flex-col my-5'>
                <div className='w-full'>
                    <h1 className='text-center text-8xl font-bold my-10 tracking-wider capitalize text-black subpixel-antialiased' id="title">La casa de las Sneakers</h1>

                </div>
                <div className="flex justify-between my-10">
                    <div className='w-80'>
                        <p className='text-2xl font-semibold font-Oswald'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quaerat, provident mollitia qui asperiores repudiandae facere iusto impedit perspiciatis, amet libero repellendus facilis aperiam ipsa. Magnam dolorem necessitatibus hic optio.</p>
                    </div>
                    <div className='h-full w-auto mx-20'>
                        <img className='h-64 z-20 absolute left-55' src="./images/banner3.png" alt="" />
                        <img className='h-72 z-0 ' src="./images/circle.webp" alt="" />
                    </div>
                    <div className='w-80'>
                        <p className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quaerat, provident mollitia qui asperiores repudiandae facere iusto impedit perspiciatis, amet libero repellendus facilis aperiam ipsa. Magnam dolorem necessitatibus hic optio.</p>
                    </div>
                </div>
                <div className='w-screen mt-10 flex justify-around'>
                    <h2>Nuestras marcas</h2>
                    <img className='h-12 m-2' src="./images/brand1.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand2.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand3.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand4.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand5.png" alt="" />
                    <img className='h-12 m-2' src="./images/brand6.png" alt="" />
                </div>
            </div>
        </>
    )
}
