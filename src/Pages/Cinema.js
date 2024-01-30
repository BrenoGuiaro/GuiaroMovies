import React, { useState } from 'react'
import { FaChevronLeft as Left } from 'react-icons/fa'
import { FaChevronRight as Right } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Cinema = ({ cinema }) => {
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
        if (x < -1510) {
            x = -1510
        }
        setScrollX(x)
    }
    return (
        <>



            <div className='list' style={{ marginLeft: scrollX }}>
                <div className='left' onClick={functionLeft}>
                    <Left style={{ fontSize: '30px' }} />
                </div>

                <div className='right' onClick={functionRight}>
                    <Right style={{ fontSize: '30px' }} />
                </div>
                <div className='title2'>
                    <p>Nos Cinemas</p>
                </div>
                {cinema?.map((cinema) => (
                    <>

                        <div className='di'>
                            <Link to={`/${cinema.id}`} key={cinema.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${cinema.poster_path}`} style={{ height: '100%' }} alt='' />
                            </Link>
                        </div>
                    </>
                ))}
            </div>

        </>
    )
}
