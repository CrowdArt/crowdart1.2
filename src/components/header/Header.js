import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';
import logo from './worldclassbot.png';
import './../../App.css';
import GoogleAuth from './../GoogleAuth';


const Header = () => {
    return(
        <div className="App">
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            Crowdart
          </Link>
          <div className="right menu">
            <Link to="/" className="item">
              Home
            </Link>
            <GoogleAuth />
          </div>
        </div>
            <img src={logo} className="App-logo" alt="Vuk" />
          <a
            className="App-link"
            href="https://bot.dialogflow.com/65a60d57-1c9b-4bc5-aee2-d9970188b0d4"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
    )
}

export default Header;