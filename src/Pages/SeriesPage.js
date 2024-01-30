import React from 'react'
import { Home } from './Home'
import { Link } from 'react-router-dom'

export const SeriesPage = ({ series }) => {
  return (
    <>
      <Home />
      <div style={{ background: 'black' }}>
        <div style={{ background: 'black' }}>
          <p style={{ fontSize: '30px', color: 'white' }}>Series</p>
        </div>
        {series?.map((serie) => (

          <div style={{ display: 'inline-block' }}>
            <Link to={`serie/${serie.id}`}>
              <div className='di2'>
                <img src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`} style={{ width: '150px' }} alt='' />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
