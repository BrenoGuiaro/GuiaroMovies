
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Search = ({ movies, series }) => {
 
    

    const [text, setText] = useState('')
    const [filtered, setFiltered] = useState([])

    const handleText = (e) => {
        let text = e.target.value
        setText(text)

        const array = movies.filter((movie) => movie.title.toLowerCase().includes(text.trim().toLowerCase()))
        console.log('teste')
        const array2 = series.filter((serie) => serie.name.toLowerCase().includes(text.trim().toLowerCase()))
       

       

        setFiltered([...array,...array2])
        

    }



    return (
        <>
            <div>
                <input type='search' className='search' placeholder='Pesquisar...' value={text} onChange={handleText} />
                {text && <div style={{ backgroundColor: 'white', color: 'black' , overflowY: 'hidden', height: '300px',overflow:'auto',width: '400px',  }}>
                    {filtered.map((item) => {
                        return (<>

                            <Link to={item.title? `movie/${item.id}` : `serie/${item.id}`}>
                                <div style={{ display: 'flex', border: '1px solid black', borderRadius: '5px '}}>

                                    <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} style={{ width: '50px' }} alt='' />
                                    <p style={{ color: 'black' , paddingLeft: '10px'}}>{item?.title || item?.name}</p>

                                </div>


                            </Link>
                        </>
                        )
                    })}
                </div>}

            </div>
        </>
    )
}










