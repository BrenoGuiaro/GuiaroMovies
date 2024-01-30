import React from 'react'
import { Home } from './Home'
import { Link } from 'react-router-dom'

export const CinemaPage = ({ cinema }) => {
  return (
    <>
      <Home />
      <div style={{ background: 'black' }}>
        <div style={{ background: 'black' }}>
          <p style={{ fontSize: '30px', color: 'white' }}>Nos Cinemas</p>
        </div>
        {cinema?.map((cinema) => (

          <div style={{ display: 'inline-block' }}>
            <div className='di2'>
              <Link to={`movie/${cinema.id}`} key={cinema.id}>
                <img src={`https://image.tmdb.org/t/p/w200${cinema.poster_path}`} style={{ width: '150px' }} alt='' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
