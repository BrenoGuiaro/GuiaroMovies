import React from 'react'

export const Banner = ({ movies }) => {
  return (
    <>
    <p>SEXXO</p>
    <div>
      {movies.map((movie) => {
        return (


          <div className=''>
            <img src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} style={{ width: '100%', height: '430px' }} alt='' />
          </div>


        )
      })}
    </div>
    </>
  )
}

