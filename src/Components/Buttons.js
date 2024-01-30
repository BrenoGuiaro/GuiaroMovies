import React from 'react'
import '../CSS/Buttons.css'
import { Link } from 'react-router-dom'


export const Buttons = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', paddingBottom: '50px' }}>
                <ul style={{ display: 'flex', justifyContent: 'space-between', width: '500px' }}>
                    <Link to={'/todos'}> <button className='button'>Todos</button></Link>
                    <Link to={'/popular'}><button className='button'>Popular</button></Link>
                    <Link to={'/embreve'}><button className='button'>Em breve</button></Link>
                    <Link to={'/cinema'}><button className='button'>Nos Cinemas</button></Link>
                    <Link to={'/series'}><button className='button'>Series</button></Link>
                </ul>
            </div>
        </>
    )
}
