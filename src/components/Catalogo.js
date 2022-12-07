import React, { useEffect, useState } from 'react'
import Box from './Box';



export const Catalogo = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = () => {
        fetch("/posts").then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })
    }
    return (
        <div className='h-fit  w-screen  bg-slate-900'>

            <h1 className='p-4 flex items-center justify-center text-center text-gray-200 dark:text-gray-800 text-4xl sm:text-6xl md:text-8xl font-oswald font-extrabold bg-blue-400 dark:bg-red-400 uppercase mt-8'>Catálogo</h1>
            <div className='w-full h-fit bg-slate-400 flex justify-around flex-wrap max-w-screen'>
                {
                    posts &&
                    posts.map(post => {
                        return (
                            <Box 
                            id ={post.id} title = {post.title} price = {post.price} color = {post.color} image = {post.image.url} description = {post.description}/>
                            
                        );
                    })
               
                }
            </div>

        </div>
    )
}
export default Catalogo