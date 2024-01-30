import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const Voltar = () => {
  return (
    <>
    <Link to={'/'} style={{ display: 'flex', width: '50px', height: '50px'}}><IoArrowBack style={{fontSize: '40px', paddingLeft: '20px', paddingTop: '20px',display: 'flex', cursor: 'pointer'}}/></Link>
    
    </>
  )
}
