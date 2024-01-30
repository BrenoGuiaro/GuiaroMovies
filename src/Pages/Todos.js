import React from 'react'
import { Home } from './Home'
import { Popular } from './Popular'
import { Series } from './Series'
import { EmBreve } from './EmBreve'
import { Cinema } from './Cinema'

export const Todos = ({series,movies, emBreve, cinema}) => {
  return (
    <>
    <Home movies={movies} series={series}/>
    <Popular movies={movies}/>
    <Series series={series}/>
    <EmBreve emBreve={emBreve}/>
    <Cinema cinema={cinema}/>
    </>
  )
}
