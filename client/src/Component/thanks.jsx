import React from 'react'
import './thank.css'
import img from "../assets/thanks.jpg"
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Thanks = () => {

const nav=useNavigate()

function gohome(){
nav('/')
}



  return (
    <>
    <div>
     <div>
      
      <div className='text'>
      <div className='thanq'><span>Thank</span> You!</div>
      <div className='thanqs'>For helping the unnoticed poeple</div>
      </div>
      <button className='btn' onClick={gohome}><IoLogOutOutline className='icon' /></button>
     </div>
    </div>

</>  
  )
}

export default Thanks