import React from 'react'
import { Container, Button } from '@mui/material';
export const Inicio = () => {
    return (
        <>
            <div className='contentWrap'>
                <Container style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                    <h1>La casa de las Sneakers</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nostrum incidunt ut hic, sunt voluptas accusamus nihil odio deserunt dolorem voluptate fuga repellat. Dolores quia delectus animi. Fugiat, blanditiis aperiam.</p>
                    <Button variant='contained' color='secondary' style={{ width: "40%", marginTop: "50px" }} href="/Catalogo">Comprar ahora</Button>
                </Container>
                <div className="images">
                    <img src="./images/image1.jpg" alt="" style={{ height: "200px" }} />
                    <img src="./images/image2.jpg" alt="" style={{ height: "200px" }} />
                </div>
            </div>
        </>
    )
}
