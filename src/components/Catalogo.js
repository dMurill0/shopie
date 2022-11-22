import React from 'react'
import { sneakers } from './data/sneakers'
import { Header } from './layout/Header';

export const Catalogo = () => {


    return (
        <div className='h-fit  w-screen  bg-slate-900'>

            <Header />
            {/* <h1 className="text-center font-bold text-gray-200 text-8xl">Catálogo</h1> */}
            <div className='w-full h-fit bg-slate-400 flex justify-around flex-wrap max-w-screen'>

                {

                    sneakers.slice(0, sneakers.length).map(sneaker => {
                        return (
                            <div key={sneaker.id} className='bg-red-400 w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/8 h-fit m-10 p-4 flex flex-col space-y-2 shadow-xl '>

                                <img className='w-70 rounded-2xl hover:scale-125 duration-700 hover:shadow-2xl' src={sneaker.imagen} alt="" />
                                <h1 className='text-white font-oswald'>{sneaker.nombre}</h1>
                                <div className='flex justify-between'>
                                    <h2 className='font-oswald'>{sneaker.color}</h2>
                                    <h3 className='bg-slate-200 rounded-2xl p-2 font-oswald'>{sneaker.precio} €</h3>
                                </div>

                            </div>
                        );
                    })
                }
            </div>

        </div>
    )
}
export default Catalogo