import React from 'react';
import { Component } from 'react';
import "./NavbarStyles.css";

import Logo from '../../assets/logo.png';
import Hamburger from 'hamburger-react'

class Navbar extends Component {
state = { clicked: false };
handleClick = () =>{
    this.setState({clicked: 
        !this.state.clicked})
}

render(){

    return (
      <>
        <nav>
          
            <div id='logo'>
            <img src={Logo} alt='logo' width={80} />
            </div>

            <div>
                <ul id="navbar" className=
                {this.state.clicked ? "#navbar active" : "#navbar"}
                    >
                    <li> <a className="#home" href="#home" onClick={this.handleClick}>Hjem</a></li>
                    <li><a href="#services" onClick={this.handleClick}>Tjenester</a></li>
                    <li><a href="#about" onClick={this.handleClick}>Om</a></li>
                    <li><a href="#contact" onClick={this.handleClick}>Kontakt</a></li>
                   
                </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>

            <Hamburger onToggle={toggled => {
              if (toggled) {
            // open a menu
            } else {
          // close a menu
  }
}} />
            
            </div>
        </nav>
      </>
    );
  }
}
  
  export default Navbar;