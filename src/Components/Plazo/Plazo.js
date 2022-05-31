import React from 'react';
import './Plazo.css'

function Plazo() {
  return (
    <div className="Plazo">
      <div className="plazo-container">
        <span className="Selecciona-tu-plazo">Selecciona tu plazo</span>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill"></div>
            </div>
            <div className="mask half">
              <div className="fill"></div>
            </div>
            <div className="inside-circle">
              {" "}
              <span className="Tu-pago-mensual">Tu pago mensual</span>
              <span className='plazoo'>$12,000.00</span>
              <span className="a-60-meses">a 60 meses</span>
              <span className="Tasa-de-inters-166">Tasa de interés 16.6%</span>
            </div>
          </div>
        </div>
        <button className="lo-quiero" onClick={(e) => console.log(e)}>
          <span className="LO-QUIERO">LO QUIERO</span>
        </button>
      </div>
    </div>
  );
}

export default Plazo;
