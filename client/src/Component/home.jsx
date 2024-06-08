import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import goalimg from '../assets/bg.png';
import donate from '../assets/dn.png';
import acc from '../assets/acc.png';
import logo from '../assets/lg.jpg';
import './land.css';
import main from '../assets/main.jpg';

export const Home = () => {
  const nav = useNavigate();

  function donatefun() {
    nav('/donate');
  }
  function recieve() {
    nav('/receive');
  }

  const onbody = (event) => {
    event.preventDefault();
    document.getElementById('head').scrollIntoView({ behavior: 'smooth' });
  };

  const ongoal = (event) => {
    event.preventDefault();
    document.getElementById('goal').scrollIntoView({ behavior: 'smooth' });
  };
  const oncon = (event) => {
    event.preventDefault();
    document.getElementById('h1').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav id="head">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar">
          <li className="li" onClick={onbody}>Home</li>
          <li className="li" onClick={ongoal}>Goal</li>
          <li className="li" onClick={oncon}>Contribution</li>
          <li  className='li'>Contact</li>
        </ul>
      </nav>

      <div className="body">
        <h1 id="h10">In the hearts of the helpless<br />stand unbending as the<br />flag of courage</h1>

        <p id="p">We make a lot of efforts to help reduce the poverty rate. A little help with<br />a little smile gives meaning to people's lives which we strive for<br />with success. We have to live to serve and create a better<br />environment for the future</p>
        <button id="btnc" className='bt' onClick={oncon}>Donate</button>

        <img id="main1" src={main} alt="" />
      </div>

      <div className="goal" id="goal">
        <img src={goalimg} id="goali" alt="" />
      </div>
      <div className="cont">
        <h1 >Our main goal is to stand next to<br />the needy people</h1>

        <p id="y">We make a lot of efforts to help reduce the poverty rate. A little help with<br />a little smile gives meaning to people's lives, which we strive for<br />with success. We have to live to serve and create a better<br />environment for the future</p>

        <h1 id='y1'>Main Goal</h1>
        <ul>
          <li className="ul" id='n1'><span>*</span>  Providing food to hungry people</li>
          <li className="ul"><span>*</span>  Providing clothes to needy people</li>
          <li className="ul"><span>*</span>  Providing shelter at low cost</li>
        </ul>

        <button id="btnp">Read More</button>
      </div>

      <h1 id="h1">AID COMMUNITY</h1>
      <div className="main">
        <div className="doner">
          <h1 className="d">Donor</h1>
          <img className="don" src={donate} alt="" />
          <button onClick={donatefun} className='db'>DONATE</button>
        </div>

        <div className="acceptor">
          <h1 className="d">Acceptor</h1>
          <img className='don' src={acc} alt="" />
          <button className='db' onClick={recieve}>RECEIVE</button>
        </div>
      </div>
    </>
  );
};
