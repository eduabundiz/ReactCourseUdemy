import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
import TarjetaFruta from './Componentes/TarjetaFruta'
import InputControlado from './Componentes/InputControlado'

const App = () =>(
  <div>
    <p>Inputs controlados</p>
    <InputControlado />
  </div>

)

export default App;
