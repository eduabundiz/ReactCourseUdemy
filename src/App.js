import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
import TarjetaFruta from './Componentes/TarjetaFruta'


const App = () =>(
  <div>
    <TarjetaFruta name="sandia" price={8.00}/>
    <TarjetaFruta name="Naranja" price={3.00} />
    <TarjetaFruta name="Kiwi"price={5.00}/>
    <TarjetaFruta name="Pina"price={2.50}>
        
    </TarjetaFruta>
  </div>

)

export default App;
