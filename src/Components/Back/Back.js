import React from 'react';
import './Back.css'

function Back() {
  return (
    <div>
      <div className="back-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={(e) => console.log(e)}
        >
          <g fill="none" fillRule="evenodd">
            <g fill="#222B45">
              <g>
                <path
                  d="M19 11H7.135l3.633-4.36c.354-.424.296-1.055-.128-1.408-.425-.354-1.055-.296-1.408.128l-5 6c-.039.047-.059.102-.088.154-.024.042-.053.078-.071.124-.045.115-.072.236-.072.358L4 12l.001.004c0 .122.027.243.072.358.018.046.047.082.071.124.029.052.049.107.088.154l5 6c.198.237.482.36.768.36.226 0 .453-.076.64-.232.424-.353.482-.984.128-1.408L7.135 13H19c.552 0 1-.448 1-1s-.448-1-1-1"
                  transform="translate(-36 -72) translate(36 72)"
                />
              </g>
            </g>
          </g>
        </svg>
        <span className="CANCELAR" onClick={(e) => console.log(e)}>CANCELAR</span>
      </div>
    </div>
  );
}

export default Back;
