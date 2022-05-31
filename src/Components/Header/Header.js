import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className="header-container">
      <div className='profile-info'>
        <span></span>
        <span className="username">Hola José</span>
        <span className="profile"></span>
      </div>
      <div>
        <div className="saldo-container">
          <span className="saldo-disponible">SALDO DISPONIBLE</span>
          <span id="saldo">$1,499,970.00</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
