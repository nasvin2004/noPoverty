import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ClothDisp.css'; // Make sure this import is uncommented
import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";

export const ClothDis = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/cloth/cfg')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


const nav=useNavigate();

function go(){
  nav('/')
}

  return (
    <>
      <div className="header">
      <h1 id="nh">Cloths Available</h1>
      <div className="btn0">
      <button className='btn' onClick={go} ><IoLogOutOutline className='icon' /></button>
      </div>
     
      </div>
      
      <div className="div01">
        {data.map(item => (
          <div className="div20" key={item.id}> {/* Assuming each item has a unique id */}
            <div className="card">
              <h2 className='p'><span className='l'>CLOTH TYPE:</span> {item.ctype}</h2>
              <img src={item.cimg} id="img15" width="400px" height="350px" alt="" />
              <div className="detail"> 
              <h3 className='p'><span className='l'>GENDER:</span> {item.gender}</h3>
              <h3 className='p'><span className='l'>SIZE:</span> {item.size}</h3>
              <h3 className='p'><span className='l'>QUANTITY:</span> {item.quantity}</h3>
              <h3 className='p'><span className='l'>HUB CONTACT NO: </span>{item.contact}</h3>
              <h3 className='p'><span className='l'>LOCATION OF NEARBY  HUB:</span> {item.area}</h3>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
