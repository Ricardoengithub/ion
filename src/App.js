import React from 'react';
import Header from './Components/Header/Header'
import Pago from './Components/Pago/Pago'
import PagoInfo from './Components/Pago-info/PagoInfo'
import Movimientos from './Components/Movimientos/Movimientos';
import Footer from './Components/Footer/Footer';
import Back from './Components/Back/Back';
import Disposicion from './Components/Disposicion/Disposicion';
import Plazo from './Components/Plazo/Plazo';
import './App.css';

function App() {
  return (
    <div className='App'>
    <div className="screen" >
      <Header/>
      <Pago/>
      <PagoInfo/>
      <Movimientos/>
      <Footer />
    </div>
    <div className='screen disp' >
      <Back/>
      <Disposicion/>
      <Plazo/>
    </div>
    </div>
  );
}

export default App;
