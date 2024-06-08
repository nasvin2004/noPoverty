import React, { useState } from 'react';
import Compressor from 'compressorjs';
import axios from 'axios';
import './food.css';
import { useNavigate } from 'react-router-dom';
import fform from "../assets/fix.jpg";

const FoodDonate = () => {
  const [fname, setName] = useState('');
  const [fimg, setImg] = useState('');
  const [ftype, setType] = useState('');
  const [fexp, setExp] = useState('');
  const [fno, setNo] = useState('');
  const [fadd, setAdd] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      new Compressor(file, {
        quality: 0.6,
        success(result) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImg(reader.result);
          };
          reader.readAsDataURL(result);
        },
        error(err) {
          console.error('Error compressing image:', err);
        },
      });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/food/ffp", {
        fname,
        fimg,
        ftype,
        fexp,
        fno,
        fadd
      });
       navigate('/thank');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="class-container">
      <div className='img10'>
        <img id="img10" src={fform} alt="Form" />
      </div>
      <form onSubmit={handleSubmit} id="form">  
        <div className='details'>
          <div className='inside'>
            <h2 id="h9">Food Donation Details</h2>
            <h3 className="h2">Food Name:</h3>
            <input
              className="in1"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <h3 className="h2">Food Image:</h3>
            <input type="file" id="file" onChange={handleImageChange} />
            <h3 className="h2">Food Type:</h3>
            <input
              className="in1"
              type="text"
              placeholder="Veg/Non-Veg"
              onChange={(e) => setType(e.target.value)}
            />
            <h3 className="h2">Best Before:</h3>
            <div className='dis2'>
              <input
                type="time"
                id="cnt2"
                className="in1"
                onChange={(e) => setExp(e.target.value)}
              />
            </div>
            <h4 id="Ab" className='date'>Below 24 Hrs</h4>
            <h3 className="h2">Hub Contact No</h3>
            <input
              className="in1"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="1234567890"
              onChange={(e) => setNo(e.target.value)}
            />
            <h3 className="h2">Location Of Nearby Hub:</h3>
            <textarea
              className="area"
              onChange={(e) => setAdd(e.target.value)}
            />
            <button id="btn9" type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FoodDonate;
