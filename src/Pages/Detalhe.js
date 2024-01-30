import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Popular } from './Popular'
import '../CSS/Detalhe.css'
import { Voltar } from '../Components/Voltar'

export const Detalhe = ({ movies }) => {
    const { id } = useParams()
    const [detal, setDetal] = useState()
    const apiKey = 'ad6ffabcfc327fc2bc18930479d08293'

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getUrl = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: {
                    language: 'pt-BR',
                    api_key: apiKey
                }
            })
            console.log(data)
            setDetal(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    
    // eslint-disable-next-line react-hooks/exhaustive-deps





    useEffect(() => {
        getUrl()
    }, [getUrl, id])

   const str = ' Episodios'
   const str2 = ' Minutos'
    return (
        <div style={{background: 'black'}}>
            <Voltar/>
            <div className='box'>
                
                <img src={`https://image.tmdb.org/t/p/w200/${detal?.poster_path}`} alt='' className='imgD' />

                <div className='Tinf'>
                    <h1 className='tiName' >{detal?.title || detal?.name}</h1>

                    <div>
                        <p className='d'><p style={{fontWeight: 'bold', paddingRight: '10px'}}>Descrição:</p>{detal?.overview}</p> 
                    </div>

                    <div className='infor'>
                        <div className='inf1' >
                            <p  className='p'><p style={{fontWeight: 'bold', paddingRight: '10px'}}>Data de lançamento:</p>{detal?.release_date || detal?.seasons[0].air_date}</p>
                            <p className='p'><p style={{fontWeight: 'bold', paddingRight: '10px'}}>Duração:</p>{detal?.runtime + str2 || detal?.number_of_episodes + str }   </p>
                        </div>
                        
                        <div className='inf2' >
                            <p className='p' ><p style={{fontWeight: 'bold', paddingRight: '10px'}}>Popularidade:</p> {detal?.popularity}</p>
                            <p className='p'><p style={{fontWeight: 'bold', paddingRight: '10px'}}>Genero:</p> {detal?.genres[0].name}</p>

                        </div>
                    </div>
                    
                </div>


            </div>
            <div>
                <Popular movies={movies} />
            </div>
        </div>
    )
}