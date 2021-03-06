import React  from 'react';
import "./PagoInfo.css";

function PagoInfo() {
  return (
    <div className="container-pago-info">
      <div className="pago-container-info">
        <span className="next-pay">Tu próximo pago</span>
        <span className="pago">$28,860.00</span>
        <div className="fecha-pago">
          <div className="fecha">
            <span className="Fecha-de-pago">Fecha de pago</span>
            <span className="month">16 Enero</span>
          </div>
          <div>
            <button className="pay-now" onClick={(e) => console.log(e)}>Pagar ahora</button>
          </div>
        </div>
        <div className="tdc">
          <div>
            <div className="logros">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <g fill="#ff0" fillRule="nonzero">
                  <g fill="#ff0">
                    <g>
                      <g>
                        <g>
                          <path
                            d="M12 16.05c.159 0 .318.038.463.113l3.769 1.97-.717-4.157c-.057-.326.052-.658.29-.889l3.036-2.936-4.203-.612c-.325-.047-.606-.25-.752-.544L12 5.201l-1.886 3.794c-.146.294-.427.497-.752.544l-4.203.612 3.036 2.936c.238.231.347.563.29.889l-.717 4.157 3.769-1.97c.145-.075.304-.113.463-.113m5.562 4.905c-.16 0-.318-.037-.463-.113l-5.1-2.664-5.098 2.664c-.338.176-.746.145-1.051-.079-.308-.224-.461-.603-.397-.978l.972-5.628-4.12-3.985c-.275-.265-.373-.663-.256-1.026.116-.363.43-.627.807-.682l5.7-.828 2.548-5.126c.338-.68 1.454-.68 1.792 0l2.547 5.126 5.7.828c.378.055.692.319.808.682.117.363.019.761-.256 1.026l-4.12 3.985.972 5.628c.064.375-.09.754-.397.978-.173.128-.38.192-.588.192"
                            transform="translate(-250 -746) translate(0 730) translate(242 8) translate(8 8)"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span className="Mis-logros">Mis logros</span>
            </div>
            <div className="logros">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <g fill="#ff0" fillRule="nonzero">
                  <g fill="#ff0">
                    <g>
                      <g>
                        <g>
                          <path
                            d="M12 16.05c.159 0 .318.038.463.113l3.769 1.97-.717-4.157c-.057-.326.052-.658.29-.889l3.036-2.936-4.203-.612c-.325-.047-.606-.25-.752-.544L12 5.201l-1.886 3.794c-.146.294-.427.497-.752.544l-4.203.612 3.036 2.936c.238.231.347.563.29.889l-.717 4.157 3.769-1.97c.145-.075.304-.113.463-.113m5.562 4.905c-.16 0-.318-.037-.463-.113l-5.1-2.664-5.098 2.664c-.338.176-.746.145-1.051-.079-.308-.224-.461-.603-.397-.978l.972-5.628-4.12-3.985c-.275-.265-.373-.663-.256-1.026.116-.363.43-.627.807-.682l5.7-.828 2.548-5.126c.338-.68 1.454-.68 1.792 0l2.547 5.126 5.7.828c.378.055.692.319.808.682.117.363.019.761-.256 1.026l-4.12 3.985.972 5.628c.064.375-.09.754-.397.978-.173.128-.38.192-.588.192"
                            transform="translate(-250 -746) translate(0 730) translate(242 8) translate(8 8)"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span className="Compras-con-TDC">Compras con TDC</span>
            </div>
          </div>
          <div className="numbers-tdc">
            <span className="numbers">$27,260.00</span>
            <span className="numbers">$1,600.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagoInfo;
