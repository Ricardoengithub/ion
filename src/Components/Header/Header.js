import React from 'react';
import './Header.css'

function Header() {
  return (
    <div class="Rectangle-header">
      <div className='profile-info'>
        <span></span>
        <span className="Hola-Jos">Hola José</span>
        <span className="profile"></span>
      </div>
      <div>
        <div class="Rectangle-saldo">
          <span class="SALDO-DISPONIBLE">SALDO DISPONIBLE</span>
          <span id="saldo">$1,499,970.00</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
