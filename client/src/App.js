import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './Component/home'
import {Contribute} from './Component/Contribute'
// import {land} from './Component/landingPage'
import {Recieve} from './Component/recieve'
import Food from"./Component/food"
import  ClothForm  from './Component/ClothForm'
import FoodDonate from "./Component/food"
import Thanks from './Component/thanks'
import { FoodDis } from './Component/foodDisp'
import { ClothDis } from './Component/ClothDisp'
export default function App() {
  return (
    <div>
      {/* <LandingPage/> */}
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>} ></Route> 
       <Route path='/donate' element={<Contribute />} ></Route>
       <Route path='/receive' element={< Recieve/>} ></Route>   
       <Route path='/foodForm' element={< FoodDonate/>} ></Route>   
       <Route path='/clothForm' element={< ClothForm/>} ></Route>   
       <Route path='/thank' element={< Thanks/>} ></Route>  
       <Route path='/fdisp' element={<FoodDis/>} ></Route>  
       <Route path='/cdisp' element={<ClothDis/>} ></Route>
       </Routes>
      </BrowserRouter>
       
    </div>
  )
}