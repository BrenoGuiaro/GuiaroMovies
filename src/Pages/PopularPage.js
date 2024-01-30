import React from 'react'
import '../CSS/Series.css'
import { Home } from './Home'
import { Link } from 'react-router-dom'

export const PopularPage = ({movies}) => {
  return (
    <>
      <Home />
      <div style={{ background: 'black' }}>
        <div style={{ background: 'black' }}>
          <p style={{ fontSize: '30px', color: 'white' }}>Popular</p>
        </div>
        {movies?.map((movie) => (
          <Link to={`movie/${movie.id}`}>
          <div style={{ display: 'inline-block' }}>
            <div className='di2'>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} style={{ width: '150px'}} alt='' />
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  )
}
