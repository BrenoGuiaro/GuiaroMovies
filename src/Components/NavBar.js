import React from 'react'
import '../CSS/NavBar.css'
import { Search } from './Search'



export const NavBar = ({movies, series}) => {



  return (
    <>
      <div className='navBar'>
        <h1 className='title'>GuiarosMovies</h1>
        <Search movies={movies} series={series} />
      </div>

    </>
  )
}
