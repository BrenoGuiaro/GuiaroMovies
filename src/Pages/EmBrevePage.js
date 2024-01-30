import React from 'react'
import { Home } from './Home'
import { Link } from 'react-router-dom'

export const EmBrevePage = ({emBreve}) => {
    return (
        <>
          <Home />
          <div style={{ background: 'black' }}>
            <div style={{ background: 'black' }}>
              <p style={{ fontSize: '30px', color: 'white' }}>Em Breve</p>
            </div>
            {emBreve?.map((embreve) => (
    
              <div style={{ display: 'inline-block' }}>
                <div className='di2'>
                <Link to={`movie/${embreve.id}`} key={embreve.id}>
                  <img src={`https://image.tmdb.org/t/p/w200${embreve.poster_path}`} style={{ width: '150px'}} alt='' />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )
}
