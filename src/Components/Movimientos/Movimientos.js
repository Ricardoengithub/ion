import React from 'react';
import "./Movimientos.css";

function Movimientos() {
	const datos = [
    { nombre: "Auto", desc: "Mis logros", tiempo: "2m", precio: "350,000.00" },
		{ nombre: "CFE", desc: "Pago de servicio", tiempo: "ayer", precio: "280.00" },
		{ nombre: "Netflix", desc: "Suscripciones", tiempo: "28 de diciembre", precio: "140.00" },
		{ nombre: "Auto", desc: "Mis logros", tiempo: "2m", precio: "350,000.00" },
		{ nombre: "CFE", desc: "Pago de servicio", tiempo: "ayer", precio: "280.00" },
		{ nombre: "Netflix", desc: "Suscripciones", tiempo: "28 de diciembre", precio: "140.00" },
  ];
  return (
    <div className="movimientos">
      <div className="ver-todos">
        <span className="tus-movimientos-text">Tus movimientos</span>
        <span className="todos-text">Ver todos</span>
      </div>
			{datos.map((item, idx) => <Movimiento key={idx} item={item} />
			)}
    </div>
  );
}

function Movimiento({item}) {
	const { icon = '', nombre, desc, tiempo, precio } = item;
	return (
    <div className="mov">
      <div className="icono">
        {icon}
      </div>
      <div className="info">
        <div className="datos">
          <span className="name">{nombre}</span>
          <span className="desc">{desc}</span>
        </div>
        <div className="tiempos">
          <span className="time">{tiempo}</span>
          <span className="precio">{precio}</span>
        </div>
      </div>
    </div>
  );
}

export default Movimientos;
