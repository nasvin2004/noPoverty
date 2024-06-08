import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './foodDis.css'; // Make sure this import is uncommented
import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";

export const FoodDis = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/food/ffg')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


const nav=useNavigate()

function gohome(){
nav('/')
}

  return (
    <>
      <div className="header">
      <h1 id="nh">Foods Available</h1>
      <div className="btn0">
      <button className='btn' onClick={gohome}><IoLogOutOutline className='icon' /></button>
      </div>
     
      </div>
      
      <div className="div1">
        {data.map(item => (
          <div className="div2" key={item.id}> {/* Assuming each item has a unique id */}
            <div className="card">
              <h2 className='p'><span className='l'>FOOD NAME:</span> {item.fname}</h2>
              <img src={item.fimg} id="img5" width="400px" height="350px" alt="" />
              <div className="detail">
              <h3 className='p'><span className='l'>FOOD TYPE:</span> {item.ftype}</h3> 
              <h3 className='p'><span className='l'>BEST BEFORE:</span> {item.fexp}</h3>
              <h3 className='p'><span className='l'>HUB CONTACT NO: </span>{item.fno}</h3>
              <h3 className='p'><span className='l'>LOCATION OF NEARBY  HUB:</span> {item.fadd}</h3>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
