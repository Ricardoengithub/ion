import React from 'react';
import './Disposicion.css'

function Disposicion() {
  return (
    <div className="disposicion">
      <div>
        <span className="Disposicin">Disposición</span>
      </div>
      <div className="disposicion-rect">
        <div className="disposicion-data">
          <span className="tienes-disponible-text">Tienes disponible</span>
          <span className="disponible">$1,499,970.00</span>
        </div>
      </div>
      <div className="auto">
				<div className='auto-container'>
        	<span className="auto-text">Auto</span>

				</div>
				<div className='auto-container'>
        	<span className="auto-text">$350,000.00</span>
				</div>
      </div>
    </div>
  );
}

export default Disposicion;
