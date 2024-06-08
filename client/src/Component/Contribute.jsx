import React from 'react'
import "./Contribute.css"
import nf from "../assets/nf.jpg"
import cf from "../assets/cf.jpg"
import { useNavigate } from 'react-router-dom'

export const Contribute = () => {

 const nav=useNavigate()

 function df(){
  nav('/foodForm')
 }

 function dc(){
  nav('/clothForm')
 }

  return (
    <>
    
     <h1 id="h">Would You Like To Contribute ?</h1>
     <div className='con'>
     <div className='st'>
       <h2 className='he'>FOOD CONTRIBUTION</h2>
       <img  className="nn"src={nf} alt="" />
       <p id="fp">Imagine the impact of your kindness – a warm meal that brightens a day, and a full stomach that brings a smile. Your donation not only feeds the hungry but also spreads love and compassion. Let's come together to build a stronger, more caring community, where every act of giving makes a world of difference. Be the reason someone believes in the goodness of people.</p>
       <button id="fc" onClick={df}>DONATE FOOD</button>
      </div>
      <div  className='st'>
      <h2 className='he'id='he1' >CLOTH CONTRIBUTION</h2>
      <img className='cf' src={cf} alt="" />
      <p id="cp" >Imagine the impact of your generosity – warm clothes that provide comfort and dignity to those in need. Your donation not only clothes the needy but also spreads warmth and compassion. Let's come together to build a stronger, more caring community, where every act of giving makes a world of difference. Be the reason someone feels the warmth of kindness and believes in the goodness of people.</p>
      <button className='bi' onClick={dc} >CLOTH DONATE</button>
      </div>
   
    </div>
    </>
   
  )
}
