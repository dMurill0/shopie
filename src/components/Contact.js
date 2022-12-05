import React from 'react'

export const Contact = () => {
    return (
        <div className='h-screen  w-screen  bg-slate-400'>
            <h1 className='p-4 flex items-center justify-center text-center text-gray-200 dark:text-gray-800 text-4xl sm:text-6xl md:text-8xl font-oswald font-extrabold bg-blue-400 dark:bg-red-400 uppercase mt-8'>Contact</h1>
      
       <div className='bg-slate-800 dark:bg-slate-200 h-2/3 pt-12'>
       <h1 className='text-center text-gray-200 dark:text-gray-800 text-xl sm:text-2xl md:text-4xl font-oswald font-extrabold mt-8'>Póngase en contacto con nosotos para cualquier duda</h1>
        <form action="post" className="flex flex-col space-y-2 w-1/2 mt-8 sm:min-w-fit sm:w-fit mx-auto ">
        <div className="flex space-x-2">
            <input
            
              className="contactInput"
              type="text"
              placeholder="Nombre"
            />
            <input
             
              className="contactInput"
              type="email"
              placeholder="E-Mail"
            />
          </div>
          <input
          
            className="contactInput"
            type="text"
            placeholder="Asunto"
          />
          <textarea
            
            className="contactInput"
            placeholder="Mensaje"
          />
          <button
            className="bg-blue-400 dark:bg-red-400 py-5 px-10 rounded-md text-white dark:text-black font-bold"
            type="submit"
          >
            Enviar
          </button>
        </form>
       </div>
       
        </div>
    )
}
