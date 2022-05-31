import React from 'react';
import './Plazo.css'

function Plazo() {
  return (
    <div class="Plazo">
      <div className="plazo-container">
        <span class="Selecciona-tu-plazo">Selecciona tu plazo</span>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="inside-circle">
              {" "}
              <span class="Tu-pago-mensual">Tu pago mensual</span>
              <span className='plazoo'>$12,000.00</span>
              <span class="a-60-meses">a 60 meses</span>
              <span class="Tasa-de-inters-166">Tasa de interés 16.6%</span>
            </div>
          </div>
        </div>
        <button className="lo-quiero">
          <span className="LO-QUIERO">LO QUIERO</span>
        </button>
      </div>
    </div>
  );
}

export default Plazo;
