import { useState } from 'react';
import './Header.scss';

function Header({zen, setzen}) {



  const risezen = () => {

    if ((zen<1000)&&(zen>499)) { setzen(zen +250)} else if (zen<500) { setzen(zen +75)}

   
  };


  const lowerzen = () => {

    if (zen>500) {setzen(zen -250)} else if (zen>150){setzen(zen -75)}


  };


  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <a className="menu-link menu-link--selected" href="#header">
          Accueil
        </a>
        <a className="menu-link" href="#header">
          React
        </a>
        <a className="menu-link" href="#header">
          Angular
        </a>
        <button className="menu-btn" type="button" onClick={risezen}>
          Augmenter le mode zen
        </button>

        <button className="menu-btn" type="button" onClick={lowerzen}>
          Réduire le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
