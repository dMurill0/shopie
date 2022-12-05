import React from 'react'

export const About = () => {
    return (
        <div className='h-fit w-screen bg-slate-800 dark:bg-slate-400'>
            <h1 className='p-4 flex items-center justify-center text-center text-gray-200 dark:text-gray-800 text-4xl sm:text-6xl md:text-8xl font-oswald font-extrabold bg-blue-400 dark:bg-red-400 uppercase mt-8'>About</h1>
            <div className='flex flex-col bg-slate-600 dark:bg-slate-200 w-2/3 mx-auto h-screen rounded-t-lg justify-start items-center mt-12 pt-6'>
                <img className='h-[224px] w-[224px] rounded-full' src="./images/logo3.png" alt="" />
                <p className='w-full bg-slate-600 dark:bg-slate-200 md:w-3/4 lg:w-2/4 md:bg-slate-400 md:dark:bg-slate-100 text-xl md:p-8 md:m-8 p-2 m-2'>Desde un minorista de ropa de calle con sede en Alemania hasta una marca reconocida a nivel mundial, SHOPIE ha aumentado su presencia física a 450 tiendas que se extienden por toda Europa desde que abrió su primera tienda en Essen en 1998. Como uno de los mayores proveedores de zapatillas y ropa urbana de Europa, SHOPIE ha siempre mantuvo un fuerte enfoque en hacer avanzar la cultura del streetwear. Los socios de marcas conocidas como Meek Mill, 21 Savage, DJ Khaled y más brindan a los consumidores de SHOPIE la oportunidad de inspirarse en los principales creadores de tendencias en la industria y mostrar su amor por la comunidad.</p>
            </div>
        </div>
    )
}
export default About