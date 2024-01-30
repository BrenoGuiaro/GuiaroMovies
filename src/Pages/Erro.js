import React from 'react'
import { TbError404 } from "react-icons/tb";


export const Erro = () => {
    return (
        <>
            <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' , justifyContent: 'center'}}>
                <div style={{display: 'flex', width: '100vw',flexDirection: 'column',paddingTop: '50px'}}>
                    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '140px'}}>
                    <TbError404 style={{fontSize: '190px'}}/>
                    
                    </div>
                    <p style={{fontSize: '36px'}}>Page not found</p>
                    
                </div>

            </div>


        </>
    )
}
