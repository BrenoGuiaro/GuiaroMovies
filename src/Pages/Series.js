import React, { useState } from 'react'
import '../CSS/Series.css'
import { FaChevronLeft as Left } from 'react-icons/fa'
import { FaChevronRight as Right } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export const Series = ({ series }) => {
  const [scrollX, setScrollX] = useState(0)


  const functionLeft = () => {
    let x = scrollX + 150
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  const functionRight = () => {
    let x = scrollX - 150
    if (x < -1400) {
      x = -1400
    }
    setScrollX(x)
  }


  return (
    <>
      <div className='list' style={{ marginLeft: scrollX, marginBottom: '0px' }}>
        <div className='left' onClick={functionLeft}>
          <Left style={{ fontSize: '30px' }} />
        </div>

        <div className='right' onClick={functionRight}>
          <Right style={{ fontSize: '30px' }} />
        </div>
        <div className='title2'>
          <p>Series</p>
        </div>

        {series?.map((serie) => (
          <>
            <div className='di'>
              <Link to={`/serie/${serie.id}`} key={serie.id} >
                <img src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`} style={{ height: '100%' }} alt='' />
              </Link>
            </div>
          </>
        ))}
      </div>

    </>
  )
}
