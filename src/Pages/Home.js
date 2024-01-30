import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Improviso } from '../Components/Improviso'
import { Buttons } from '../Components/Buttons'


export const Home = ({series,movies}) => {

    return (
        <>
             <div style={{background: 'black'}}>
                <NavBar movies={movies} series={series}/>
                <Improviso/>
                <Buttons />
            </div>
        </>
    )
}
