import './App.css';
import Header from './Components/Header/Header'
import Pago from './Components/Pago/Pago'
import PagoInfo from './Components/Pago-info/PagoInfo'
import Movimientos from './Components/Movimientos/Movimientos';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App" style={{marginLeft: '52px'}}>
      <Header/>
      <Pago/>
      <PagoInfo/>
      <Movimientos/>
      <Footer />
    </div>
  );
}

export default App;
