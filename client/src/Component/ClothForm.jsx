import React, { useState } from 'react';
import Compressor from 'compressorjs';
import axios from 'axios';
import './food.css';
import { useNavigate } from 'react-router-dom';
import cloth from "../assets/cloth.webp";

const FoodDonate = () => {
  const [ctype, setCtype] = useState('');
  const [cimg, setImg] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [contact,setContact]=useState('');
  const [area, setArea] = useState('');

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
      await axios.post("http://localhost:5000/cloth/cfp", {
        ctype,
        cimg,
        gender,
        size,
        quantity,
        contact,
        area
      });
       navigate('/thank');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="class-container">
      <div className='img10'>
        <img id="img10" src={cloth} alt="Form" />
      </div>
      <form onSubmit={handleSubmit} id="form">  
        <div className='details'>
          <div className='inside'>
            <h2 id="h9">Cloth Donation Details</h2>
            <h3 className="h2">Cloth Type:</h3>
            <input
              className="in1"
              type="text"
              value={ctype}
              onChange={(e) => setCtype(e.target.value)}
            />
            <h3 className="h2">Cloth Current Image:</h3>
            <input type="file" id="file" onChange={handleImageChange} />
            <h3 className="h2">Gender:</h3>
            <input
              className="in1"
              type="text"
              placeholder="Men/Women"
              onChange={(e) => setGender(e.target.value)}
            />
            <h3 className="h2">Size</h3>
            <div className='dis2'>
              <input
                type="text"
                id="cnt2"
                className="in1"
                placeholder="S | M | L | XL | XXL"
               
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <h3 className="h2">Quantity</h3>
            <div className='dis2'>
              <input
                type="number"
                id="cnt2"
                className="in1"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <h3 className="h2">Hub Contact No</h3>
            <input
              className="in1"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="1234567890"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />

            <h3 className="h2">Location Of Nearby Hub:</h3>
            <textarea
              className="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            <button id="btn9"  type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FoodDonate;
