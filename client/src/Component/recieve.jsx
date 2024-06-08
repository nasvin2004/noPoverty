import React from 'react'
import "./recieve.css"
import fr from "../assets/fr.jpg"
import cf from "../assets/cf.jpg"
import { IoFunnelSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export const Recieve = () => {

const nav=useNavigate()  

function fooddis(){
nav('/fdisp')
}

function god(){
  nav('/cdisp')
}


  return (
    <>
    
     <h1 id="h">Sharing Is Other Form Of Caring ❤️ </h1>
     <div className='con'>
     <div className='st'>
       <h2 className='he' id="he4" >FOOD ACCEPTANCE</h2>
       <img  className="nf"src={fr} alt="" />
       <p id="fp">In a world where a simple meal can mean the world, your generosity has the power to create ripples of kindness that reach far beyond the dinner table. Imagine the impact of your kindness – a warm meal that brightens a day, and a full stomach that brings a smile. Every act of giving, no matter how small, has the potential to uplift spirits and nourish souls. Join us in spreading compassion and making a difference, one meal at a time.</p>
       <button id="nb" onClick={fooddis}>PICK FOOD</button>
      </div>
      <div  className='st'>
      <h2 className='he'id="he3" >CLOTH ACCEPTANCE</h2>
      <img className='cf' src={cf} alt="" />
      <p id="cp" >In a world where a simple piece of clothing can bring warmth and dignity, your generosity holds the power to create waves of compassion that extend far beyond the wardrobe. Picture the impact of your kindness – a cozy sweater to fend off the cold, or a fresh set of clothes that restores confidence and hope. Each donation, no matter the size, has the ability to transform lives and uplift communities. </p>
      <button className='bi' onClick={god} >PICK CLOTH</button>
      </div>
   
    </div>
    </>
   
  )
}
